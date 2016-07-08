alias run='rerun "app.rb" --ignore "**/*.{js,css,haml,scss,sass,html,md,erb,handlebars}"'
alias runprod='db=prod rerun "app.rb" --ignore "**/*.{js,css,haml,scss,sass,html,md,erb,handlebars}"'
alias runlocal='rerun "app.rb -e test" --ignore "**/*.{js,css,haml,scss,sass,html,md,erb,handlebars}"'