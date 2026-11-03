# 주요 서비스 사진 보정

- 작업일: 2026-11-03
- 방식: 내장 image_gen 도구로 전단지 사진 6종을 각각 고해상도로 보정했다.
- 입력: public/assets/flyer-reference.jpeg의 사진 영역(각 약 194×97px)
- 결과: 각 1774×887px. 장면과 구도를 유지하도록 요청하되 AI 보정 과정에서 세부 묘사가 재구성된다.
- 배포 파일: public/assets/services/ 아래의 JPEG 6종. sips로 포맷만 변환했다.
- 기존 전단지와 생성 원본은 보존했다. 홈페이지 문구는 추가하지 않았다.

## sweeping

- 웹 파일: public/assets/services/sweeping.jpg
- 생성 원본: /Users/kakao/.codex/generated_images/01a19f99-99b9-7ec3-a752-e2d2a037b8b8/exec-bb386536-73a3-4ec6-bd43-e8cc881cc4ba.png

### 사용한 프롬프트

```text
Edit target: ONLY the specified small photograph within the attached cleaning-company flyer; the rest of the flyer is solely a locator/reference and must NOT be included in the output. Restore and upscale this exact photograph to a standalone high-resolution photorealistic landscape website image, approximately 1536×768 pixels (2:1 aspect ratio). Target: TOP LEFT of the six-photo major-services grid, titled 계단 쓸기. Its exact original pixel rectangle in the 794×1123 flyer is x=67,y=607,w=194,h=97. Grey speckled granite stairs, light wood broom handle slants down from upper right, wide black broom bristles resting on a stair tread, worker's dark trousers and black shoe at right. Preserve the original photograph's scene, viewpoint, action, object placement, color palette and lighting as faithfully as possible. Improve fine material detail, realistic textures and edge clarity; remove JPEG compression, blur and pixelation naturally. Keep the same crop; do not invent extra subjects or change the cleaning equipment. Output ONE full-bleed rectangular photograph only. No text, labels, watermarks, frames, rounded corners, graphic icons, flyer elements, cartoon rendering, excessive HDR, halos, oversharpening, or collages.
```

## mopping

- 웹 파일: public/assets/services/mopping.jpg
- 생성 원본: /Users/kakao/.codex/generated_images/01a19f99-99b9-7ec3-a752-e2d2a037b8b8/exec-fe4ea738-d8f1-4aa2-a218-0bc208c54867.png

### 사용한 프롬프트

```text
Edit target: ONLY the specified small photograph within the attached cleaning-company flyer; the rest of the flyer is solely a locator/reference and must NOT be included in the output. Restore and upscale this exact photograph to a standalone high-resolution photorealistic landscape website image, approximately 1536×768 pixels (2:1 aspect ratio). Target: TOP MIDDLE of the six-photo major-services grid, titled 물걸레 청소. Exact photo rectangle x=294,y=607,w=194,h=97 in the 794×1123 flyer. Wide flat blue microfiber mop on light grey polished tile, silver handle slants up to the upper right, worker's black trousers and black shoes behind, glass entrance on left. Preserve the original photograph's scene, viewpoint, action, object placement, color palette and lighting as faithfully as possible. Improve fine material detail, realistic textures and edge clarity; remove JPEG compression, blur and pixelation naturally. Keep the same crop; do not invent extra subjects or change the cleaning equipment. Output ONE full-bleed rectangular photograph only. No text, labels, watermarks, frames, rounded corners, graphic icons, flyer elements, cartoon rendering, excessive HDR, halos, oversharpening, or collages.
```

## railing

- 웹 파일: public/assets/services/railing.jpg
- 생성 원본: /Users/kakao/.codex/generated_images/01a19f99-99b9-7ec3-a752-e2d2a037b8b8/exec-159fddfd-1ded-40d6-a520-9fadd2f9630b.png

### 사용한 프롬프트

```text
Edit target: ONLY the specified small photograph within the attached cleaning-company flyer; the rest of the flyer is solely a locator/reference and must NOT be included in the output. Restore and upscale this exact photograph to a standalone high-resolution photorealistic landscape website image, approximately 1536×768 pixels (2:1 aspect ratio). Target: TOP RIGHT of the six-photo major-services grid, titled 난간 청소. Exact photo rectangle x=522,y=607,w=194,h=97 in the 794×1123 flyer. Close-up blue rubber-gloved right hand and light grey microfiber cloth wrapped on a polished stainless steel stair handrail, handrail runs diagonally from lower left to upper right; stairwell backdrop. Preserve the original photograph's scene, viewpoint, action, object placement, color palette and lighting as faithfully as possible. Improve fine material detail, realistic textures and edge clarity; remove JPEG compression, blur and pixelation naturally. Keep the same crop; do not invent extra subjects or change the cleaning equipment. Output ONE full-bleed rectangular photograph only. No text, labels, watermarks, frames, rounded corners, graphic icons, flyer elements, cartoon rendering, excessive HDR, halos, oversharpening, or collages.
```

## glass

- 웹 파일: public/assets/services/glass.jpg
- 생성 원본: /Users/kakao/.codex/generated_images/01a19f99-99b9-7ec3-a752-e2d2a037b8b8/exec-13127312-1639-4942-b3af-c9480d0af292.png

### 사용한 프롬프트

```text
Edit target: ONLY the specified small photograph within the attached cleaning-company flyer; the rest of the flyer is solely a locator/reference and must NOT be included in the output. Restore and upscale this exact photograph to a standalone high-resolution photorealistic landscape website image, approximately 1536×768 pixels (2:1 aspect ratio). Target: BOTTOM LEFT of the six-photo major-services grid, titled 유리문 청소. Exact photo rectangle x=67,y=800,w=194,h=97 in the 794×1123 flyer. Close-up dark window squeegee held by a blue rubber-gloved hand at lower edge, wiping large glass entrance door. Black window frame on left, soft blue daylight and out-of-focus city buildings beyond glass. Preserve the original photograph's scene, viewpoint, action, object placement, color palette and lighting as faithfully as possible. Improve fine material detail, realistic textures and edge clarity; remove JPEG compression, blur and pixelation naturally. Keep the same crop; do not invent extra subjects or change the cleaning equipment. Output ONE full-bleed rectangular photograph only. No text, labels, watermarks, frames, rounded corners, graphic icons, flyer elements, cartoon rendering, excessive HDR, halos, oversharpening, or collages.
```

## parking

- 웹 파일: public/assets/services/parking.jpg
- 생성 원본: /Users/kakao/.codex/generated_images/01a19f99-99b9-7ec3-a752-e2d2a037b8b8/exec-a512d74f-45fc-4d95-b77f-59d73aad5695.png

### 사용한 프롬프트

```text
Edit target: ONLY the specified small photograph within the attached cleaning-company flyer; the rest of the flyer is solely a locator/reference and must NOT be included in the output. Restore and upscale this exact photograph to a standalone high-resolution photorealistic landscape website image, approximately 1536×768 pixels (2:1 aspect ratio). Target: BOTTOM MIDDLE of the six-photo major-services grid, titled 주차장 정리. Exact photo rectangle x=294,y=800,w=194,h=97 in the 794×1123 flyer. Underground parking garage, grey concrete floor reflecting overhead fluorescent fixtures, cleaning trolley at left, rear/side of worker wearing blue shirt and dark trousers at right pushing a wide flat mop. Parked cars and structural columns in background. Preserve the original photograph's scene, viewpoint, action, object placement, color palette and lighting as faithfully as possible. Improve fine material detail, realistic textures and edge clarity; remove JPEG compression, blur and pixelation naturally. Keep the same crop; do not invent extra subjects or change the cleaning equipment. Output ONE full-bleed rectangular photograph only. No text, labels, watermarks, frames, rounded corners, graphic icons, flyer elements, cartoon rendering, excessive HDR, halos, oversharpening, or collages.
```

## elevator

- 웹 파일: public/assets/services/elevator.jpg
- 생성 원본: /Users/kakao/.codex/generated_images/01a19f99-99b9-7ec3-a752-e2d2a037b8b8/exec-e54789c4-afe6-4cc4-861c-a38c58fc4f0d.png

### 사용한 프롬프트

```text
Edit target: ONLY the specified small photograph within the attached cleaning-company flyer; the rest of the flyer is solely a locator/reference and must NOT be included in the output. Restore and upscale this exact photograph to a standalone high-resolution photorealistic landscape website image, approximately 1536×768 pixels (2:1 aspect ratio). Target: BOTTOM RIGHT of the six-photo major-services grid, titled 승강기 청소. Exact photo rectangle x=522,y=800,w=194,h=97 in the 794×1123 flyer. Close-up blue rubber-gloved hand with white cleaning cloth wiping a stainless-steel elevator button panel, black round buttons on right and softly reflective steel door on left. Preserve the original photograph's scene, viewpoint, action, object placement, color palette and lighting as faithfully as possible. Improve fine material detail, realistic textures and edge clarity; remove JPEG compression, blur and pixelation naturally. Keep the same crop; do not invent extra subjects or change the cleaning equipment. Output ONE full-bleed rectangular photograph only. No text, labels, watermarks, frames, rounded corners, graphic icons, flyer elements, cartoon rendering, excessive HDR, halos, oversharpening, or collages.
```
