set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:bingeli1379/css-showcase.git master:gh-pages

cd -