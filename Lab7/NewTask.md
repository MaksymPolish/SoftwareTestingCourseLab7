# Лабораторна робота — GitHub Actions CI для API

## Завдання

На основі попереднього API-проєкту налаштувати **розширений CI pipeline через GitHub Actions**.

---

## Основна логіка роботи

Кожна зміна повинна проходити через **Pull Request**:

`feature/fix branch -> Pull Request -> GitHub Action запускається -> всі перевірки успішні -> merge в main`

---

## Що потрібно зробити

### 1. Використати існуючий код

Взяти проєкт із попередньої лабораторної роботи або інший готовий API-проєкт.

---

### 2. Налаштувати GitHub Actions

Створити workflow файл:

```text
.github/workflows/ci.yml