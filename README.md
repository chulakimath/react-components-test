<p>android/local.properties(create file incse not automatically created)  sdk.</p>

`dir=C\:\\Users\\santosh\\AppData\\Local\\Android\\Sdk`


1> react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

👉🏻 in case above command dont work //--.-///////
1>

`curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"`

👇
in case of error --  mkdir -p android/app/src/main/assets


 `cd android`

 `./gradlew assembleDebug`

incase want to build relese version>>    
`./gradlew assembleRelease`

<i><u> last apk build location> yourProject/android/app/build/outputs/apk/debug/app-debug.apk</u></i>

<i><u>incase of release apk > Loaction->>>>yourProject/android/app/build/outputs/apk/release/app-release.apk
</u></i>


<b>npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
for this error  👇</b>

alternatve 1 > `mkdir -p android/app/src/main/assets`

Then

`npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`
