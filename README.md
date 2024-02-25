## Couse Model Schema

# 강의(Course) 모델

강의 제목 (title): String
강의 난이도 (difficulty): String (예: Beginner, Intermediate, Advanced)
강의 카테고리 (category): String
강의에 사용되는 기술 (technologies): String[]
강의 동영상 개수 (videoCount): Int
강의 분량 (duration): String (예: "10 hours")
강의 설명 (description): String (HTML 형식 또는 마크다운)
강의 생성일자 (createdAt): DateTime
강의 공개일자 (publishedAt): DateTime
강의 업데이트 일자 (updatedAt): DateTime
무료/유료 (isFree): Boolean

# 챕터(Chapter) 모델
챕터 제목 (title): String
속한 강의 (course): Relation to Course

# 렉처(Lecture) 모델
강의 제목 (title): String
깃허브 주소 (githubUrl): String
동영상 URL (videoUrl): String
동영상 길이 (videoLength): String (예: "15 minutes")
강의 설명 (description): String (HTML 형식)
속한 챕터 (chapter): Relation to Chapter