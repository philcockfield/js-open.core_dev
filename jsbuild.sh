#!/bin/sh

# --------------------------------------------------------
# Build the JavaScript environment using Google Closure.
#
# Notes:
#   -  To make this file executable: chmod +x jsbuild.sh
#
# --------------------------------------------------------

echo
echo "--------------------------------------------------"
echo " START - Building JavaScript project: core_dev"
echo "--------------------------------------------------"

JS_PATH="public/javascripts"
CLOSURE_PATH="$JS_PATH/closure-library/closure/bin"
CORE_PATH="$JS_PATH/open.core"


# --------------------------------------------------------
#   Generate dependency files (deps.js)
# --------------------------------------------------------
$CLOSURE_PATH/build/depswriter.py  \
   --root_with_prefix="$CORE_PATH ../../../open.core" \
   > $CORE_PATH/deps.js
echo "+ Generated google closure dependency file at: $CORE_PATH/deps.js"


# --------------------------------------------------------
#   Generate a single script file
# --------------------------------------------------------
SINGLE_FILE=$JS_PATH/application-single.js
$CLOSURE_PATH/calcdeps.py \
  -i $JS_PATH/application.js \
  -p $JS_PATH/closure-library/ \
  -p $JS_PATH/open.core/ \
  -o script > $SINGLE_FILE
echo "+ Generated single application script file at: $SINGLE_FILE"


# --------------------------------------------------------
#   Run Linter
# --------------------------------------------------------
./jslint.sh

echo
echo "--------------------------------------------------"
echo " COMPLETE - Building JavaScript project: core_dev"
echo "--------------------------------------------------"
echo