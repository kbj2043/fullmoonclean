# fullmoonclean — 보름달 크린

김포 구래동·마산동·양촌 지역의 빌라·상가 계단 정기 청소를 소개하는 정적 웹사이트다. 승인한 시안의 로고·캐릭터·비눗방울을 유지한다.

## 실행

프로젝트 루트에서 다음 명령을 실행한다. 별도 패키지 설치나 빌드가 필요 없다.

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory public
```

브라우저에서 `http://127.0.0.1:8765/`를 연다.

## 구성

- `public/index.html`: 서비스·지역·상담 절차·FAQ·회사 소개·연락처
- `public/styles.css`: 승인한 디자인과 반응형 화면
- `public/app.js`: 모바일 메뉴 동작
- `public/assets/`: 사이트에서 사용하는 이미지
- `public/_headers`: 정적 호스팅용 보안 헤더
- `design/`: 로컬에만 보관하는 승인 시안과 참고 자료 (Git 제외)
- `.github/workflows/pages.yml`: 검사 후 `public/`만 배포하는 GitHub Actions
- `scripts/check_site.py`: 로컬 파일 참조와 내부 링크 검사
- `docs/`: 구현 계획과 검증 결과

## 동작

- 전화 상담은 `tel:01066987572`, 문자 문의는 `sms:01066987572`를 사용한다. 버튼은 PC 헤더와 모바일 하단 고정 영역에만 표시한다. 하단의 대표 번호는 전화 링크로 유지한다.
- 실제 전화·문자 앱 연결은 방문자의 기기와 설치된 앱에 따라 달라진다.
- 모바일 메뉴와 FAQ는 브라우저 기본 `details` 요소로 동작한다.
- JavaScript를 사용할 수 없어도 서비스 안내와 전화·문자 링크는 동작한다.
- 기기의 동작 줄이기 설정을 따르며, 이 설정에서는 비눗방울 애니메이션을 멈춘다.
- 고객 정보를 홈페이지에서 수집하거나 저장하지 않는다.

## GitHub Pages 배포

배포 대상은 **`public/` 폴더의 내용만**이다. `design/`, `docs/`, Git 메타데이터를 웹에 올리지 않는다.

- 사이트 주소: [보름달 크린](https://kbj2043.github.io/fullmoonclean/)
- 저장소: [kbj2043/fullmoonclean](https://github.com/kbj2043/fullmoonclean)
- `main` 브랜치의 `public/`, 파일 검사 스크립트, 배포 워크플로가 변경되면 GitHub Actions가 검증 후 Pages에 배포한다. Actions 화면에서 수동 실행할 수도 있다.
- 사용자 지정 도메인은 연결하지 않았다.
- GitHub Pages와 기본 Python 미리보기 서버는 `_headers`를 적용하지 않는다. 현재 CSP와 리퍼러 정책은 HTML 메타 태그로 적용한다. HTTP 응답 전용 헤더가 필요한 호스팅으로 옮길 때는 `_headers`를 사용하고 실제 응답을 확인한다.
- canonical URL, 공유 이미지, robots.txt와 sitemap은 현재 GitHub Pages 주소를 기준으로 설정한다. 도메인을 변경할 때 함께 갱신한다.
- 사업자 정보, 회사 소개, 실제 작업 사진과 로고 원본은 사용자에게 받은 사실만 반영한다.
- 캐릭터는 전단지를 바탕으로 이미지 편집 도구가 만든 임시 편집본이다. 원본을 받으면 `public/assets/character.png`를 교체하고 이미지의 실제 크기도 수정한다.
- 로고는 전단지의 집·반짝이 심벌을 바탕으로 재구성한 투명 SVG다. 헤더·회사 소개·탭 아이콘에서 같은 파일을 사용한다. 정식 로고 원본을 받으면 교체한다.
- 주요 서비스 6종은 전단지 사진을 이미지 생성 도구로 보정한 1774×887px 이미지와 작업 설명으로 안내한다. 웹용 JPEG는 `public/assets/services/`에 저장한다. 보정 프롬프트는 `docs/service-image-upscale.md`에 기록한다. 난간·유리문·주차장·승강기는 정기 청소 포함 여부와 작업 가능 범위를 현장 상담에서 확인하도록 명시한다.

## 확인

```sh
node --check public/app.js
python3 scripts/check_site.py
```

실행 중인 서버에서 PC·모바일 화면, 메뉴·FAQ, 연락처 링크와 이미지 로딩을 확인한다. 발신이나 문자 전송은 검증 과정에서 하지 않는다.
