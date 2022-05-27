# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2022-05-16

### Added

- Created backend
- Connected backend to the site
- Added option for registration
- Created register codes for account creation

### Changed

- Site is not serving sample data anymore
- Logo and icon are received as base64

## [0.3.0] - 2022-05-16

### Added

- Enable markdown for article content
- Add Admin Pages
- Enable the deletion of authors
- Add settings for the admin

## [0.2.0] - 2022-05-14

### Added

- Pages for the Author
- Routing is done with nested routes
- All necessary pages are properly protected against unauthorized access
- Login for the author
- Editing and creating of articles
- Editing and creating of categories
- Settings for the author (password change)


## [0.1.0] - 2022-04-29

### Added

- Reader facing part of the site
- Data fetching from the API (which still uses mocked data)
- Stories (using `storybook`) for the most important components
- Own styling solution using props (with the help of `emotion`)
- Routing with `vue-router`
- State management with `pinia`
- Html head (and body) manipulation with `vueuse/head`

### Changed

- Moved from `tailwind` to `emotion`
