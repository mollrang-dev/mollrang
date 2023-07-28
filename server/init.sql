CREATE DATABASE IF NOT EXISTS mollrang CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL ON mollrang.* TO 'root'@'%';
FLUSH PRIVILEGES;


USE mollrang;


CREATE TABLE quizzes (
    id VARCHAR(36) NOT NULL DEFAULT (UUID()),
    quiz_info_id INT NOT NULL,
    correct_answer TINYINT NOT NULL COMMENT '0 = O, 1 = X',
    level TINYINT NULL DEFAULT 1 COMMENT '1~5까지 레벨 설정, 1은 낮음',
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE quizzes_information (
    id INT NOT NULL AUTO_INCREMENT COMMENT 'auto_increment',
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL COMMENT '퀴즈의 구체적 질문',
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE quizzes_skills_tags (
    quiz_id VARCHAR(36) NOT NULL DEFAULT (UUID()),
    tag VARCHAR(255) NOT NULL COMMENT 'javascript, mysql, db, react, node, ...',
    PRIMARY KEY (quiz_id),
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE user (
    id VARCHAR(36) NOT NULL DEFAULT (UUID()),
    nickname VARCHAR(255) NOT NULL,
    sns_provider ENUM('github') NULL,
    sns_profile TEXT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE users_quizzes_answers (
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(36) NOT NULL DEFAULT (UUID()),
    quiz_id VARCHAR(36) NOT NULL DEFAULT (UUID()),
    answer TINYINT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE quizzes_favorites (
    id INT NOT NULL,
    user_id VARCHAR(36) NOT NULL DEFAULT (UUID()),
    quiz_id VARCHAR(36) NOT NULL DEFAULT (UUID()),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;