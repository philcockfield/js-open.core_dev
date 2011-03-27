JS_PATH="public/javascripts"
CORE_PATH="$JS_PATH/open.core"

echo "+ Running Linter now ..."
echo "  Path: $CORE_PATH/core"
echo "--"
gjslint --nojsdoc --strict --recurse $CORE_PATH/core
echo