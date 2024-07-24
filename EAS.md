## Distribute using Expo Application Services

To be able to use Expo Application Services to upload your app to App Store and Google Play Store there are some configurations that need to be done on your side.

### Google Play Store

The first submission of the app needs to be performed manually. Learn more: https://expo.fyi/first-android-submission. Only after having a valid version submitted you can submit automatically using EAS.

To submit an app to google play store you will have to follow the steps in [Uploading a Google Service Account Key for Play Store Submissions with EAS](https://github.com/expo/fyi/blob/main/creating-google-service-account.md) guide, its super detailed and should not take you much time.

Once you've completed the guide you'll be able to submit to the store your EAS builds using the following command:

`eas submit --platform android`

### AppStore
