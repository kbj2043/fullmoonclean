"""배포할 HTML의 로컬 파일 참조와 페이지 내부 링크를 검사한다."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class PageReferences(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.references = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if "id" in attributes:
            self.ids.append(attributes["id"])
        for name in ("src", "href"):
            if attributes.get(name):
                self.references.append(attributes[name])


def check_site():
    root = Path(__file__).resolve().parents[1] / "public"
    errors = []
    for page in sorted(root.rglob("*.html")):
        parsed = PageReferences()
        parsed.feed(page.read_text(encoding="utf-8"))
        if len(parsed.ids) != len(set(parsed.ids)):
            errors.append(f"{page.name}: 중복된 id가 있습니다.")
        for reference in parsed.references:
            parts = urlsplit(reference)
            if parts.scheme or parts.netloc:
                continue
            if parts.path:
                target = (page.parent / unquote(parts.path)).resolve()
                if not target.is_relative_to(root.resolve()) or not target.is_file():
                    errors.append(f"{page.name}: 파일을 찾을 수 없습니다: {reference}")
            elif parts.fragment and unquote(parts.fragment) not in parsed.ids:
                errors.append(f"{page.name}: 이동할 영역이 없습니다: {reference}")
    if not (root / "index.html").is_file():
        errors.append("public/index.html이 없습니다.")
    if errors:
        raise SystemExit("\n".join(errors))
    print("정적 파일 참조와 페이지 내부 링크 확인 완료")


if __name__ == "__main__":
    check_site()
