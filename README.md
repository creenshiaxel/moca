# MOCA GitHub Pages 배포용

## 업로드
이 폴더 안의 파일을 GitHub 저장소 최상위(root)에 모두 올립니다.

필수 파일:
- index.html
- manifest.webmanifest
- sw.js
- icon-180.png
- icon-192.png
- icon-512.png
- .nojekyll

## GitHub Pages 켜기
1. 저장소 → Settings → Pages
2. Build and deployment → Source: Deploy from a branch
3. Branch: main / (root)
4. Save
5. 생성된 https://사용자이름.github.io/저장소이름/ 주소로 접속

## 사용
- PC: Chrome/Edge에서 위 주소 접속
- iPhone: Safari에서 위 주소 접속 → 공유 → 홈 화면에 추가
- 학습기록은 각 기기의 브라우저 localStorage에 따로 저장됩니다.
- 교재 PDF는 기기에서 직접 선택해서 연결합니다. PDF 파일 자체는 서버로 업로드되지 않습니다.

## 업데이트
파일 수정 후 GitHub에 다시 commit/push하면 Pages가 자동 갱신됩니다.
