#!/usr/bin/env bash

# directories
init_dirs="mkdir config components views lib"
route_dir="mkdir lib/routes"
hooks_dir="mkdir lib/hooks"
redux_dir="mkdir lib/store && lib/store/actions lib/store/reducers lib/store/types"
config_dir="mkdir config/auth"
component_main_dir="mkdir components/forms components/nav components/shared components/dotcom components/user components/modals components/legal"
forms_dir="mkdir components/forms/auth components/forms/utils"
forms_subdir="mkdir components/forms/auth/LoginForm components/forms/auth/RegisterForm components/forms/auth/ForgotPasswordForm components/forms/auth/PasswordResetForm components/forms/utils/UserSettingsForm components/forms/utils/ContactForm components/forms/utils/FormErrorMessage"
user_dir="mkdir components/user/UserProfile components/user/UserSettings"
layout_dir="mkdir views/layouts"

# files
pages_ts="touch pages/about.ts pages/contact.ts pages/work.ts pages/login.ts pages/register.ts pages/forgot-password.ts pages/password-reset.ts"

# hygen pages 
hygen_page_about="hygen page new --title AboutPage --desc About Me"
hygen_page_contact="hygen page new --title ContactPage --desc Contact Me"
hygen_page_work="hygen page new --title WorkPage --desc Work With Me"

# hygen components
hygen_component_about="hygen component new --name about --type dotcom --hasStyles"
hygen_component_contact="hygen component new --name contact --type dotcom --hasStyles"
hygen_component_work="hygen component new --name work --type dotcom --hasStyles"

# forms
hygen_form_contact="hygen form new --name ContactForm --type utils"

# nav
hygen_component_header="hygen component new --name header --type nav --hasStyles"
hygen_component_footer="hygen component new --name footer --type nav --hasStyles"

lib_files_ts="touch lib/routes/index.ts"
config_files_ts="touch config/config.ts config/auth/auth.ts"

# redux
redux_packages="yarn add @reduxjs/toolkit react-redux"
rtk_files_ts="touch lib/store/index.ts"

# storybook
# tests

echo "Scaffolding your NextJS TypeScript app"

$init_dirs
$route_dir
$hooks_dir
$config_dir

$component_main_dir
$forms_dir
$layout_dir

$config_files_ts
$hygen_page_about
$hygen_page_contact
$hygen_page_work
$hygen_component_header
$hygen_component_footer
$hygen_component_about
$hygen_component_contact
$hygen_component_work
$hygen_form_contact


echo "finished"