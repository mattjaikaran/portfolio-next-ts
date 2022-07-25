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
pages="touch pages/about.ts pages/contact.ts pages/portfolio.ts pages/login.ts pages/register.ts pages/forgot-password.ts pages/password-reset.ts"

# hygen pages 
hygen_page_about="hygen page new --title AboutPage --desc About Me"
hygen_page_contact="hygen page new --title ContactPage --desc Contact Me"
hygen_page_portfolio="hygen page new --title PortfolioPage --desc Portfolio With Me"

# hygen views
hygen_view_about="hygen view new --name about --type dotcom --hasStyles"
hygen_view_contact="hygen view new --name contact --type dotcom --hasStyles"
hygen_view_portfolio="hygen view new --name portfolio --type dotcom --hasStyles"

# forms
hygen_form_contact="hygen form new --name ContactForm --type utils"

# nav
hygen_component_header="hygen component new --name header --type nav --hasStyles"
hygen_component_footer="hygen component new --name footer --type nav --hasStyles"

lib_files="touch lib/routes/index.ts"
config_files="touch config/config.ts config/auth/auth.ts"

# redux
redux_packages="yarn add @reduxjs/toolkit react-redux"
rtk_files="touch lib/store/index.ts"

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

$config_files
$hygen_page_about
$hygen_page_contact
$hygen_page_portfolio
$hygen_component_header
$hygen_component_footer
$hygen_view_about
$hygen_view_contact
$hygen_view_portfolio
$hygen_form_contact


echo "finished"