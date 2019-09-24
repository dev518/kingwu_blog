basepath=$(cd `dirname $0`; pwd)
basepath=$basepath/../{yourdirct}
echo $basepath
cd $basepath


APP_BUNDLE_NAME="xxxxxxxx"
INFO_PLIST=$basepath/Info.plist
IPA_FILE=$basepath/xxxx.ipa
IPA_DIR=$basepath/Temp

if [ -d "$IPA_DIR" ]; then
echo "rm Temp"
rm -rf "${IPA_DIR}"
else
echo "mkdir Temp"
mkdir -p "${IPA_DIR}"
fi

#解包IPA
if [[ -f "$IPA_FILE" ]]; then
echo "unzip $IPA_FILE begin ..."
unzip -q "$IPA_FILE" -d "$IPA_DIR"
if [[ $? != 0 ]]; then
echo "unzip $IPA_FILE failed"
exit 2
else
echo "unzip $IPA_FILE successed"
fi
fi

appDir="$IPA_DIR/Payload/`ls "$IPA_DIR/"Payload`"

echo $appDir
InfoPlistPath=$appDir/Info.plist
echo $InfoPlistPath

cp $InfoPlistPath $basepath
echo "cp plist成功"
rm -rf "${IPA_DIR}"

APP_URLSCHEMA="schema u want add"
echo $INFO_PLIST
echo "schema CFBundleIdentifier ==> $APP_BUNDLE_NAME"
defaults write ${INFO_PLIST} CFBundleDisplayName -string $APP_BUNDLE_NAME
echo "schema CFBundleURLTypes ==> $APP_URLSCHEMA"
defaults write ${INFO_PLIST} CFBundleURLTypes -array-add '{CFBundleTypeRole=Editor;CFBundleURLSchemes=($APP_URLSCHEMA);}'
echo "schema  deleta UISupportedDevices"
defaults delete ${INFO_PLIST} UISupportedDevices 


