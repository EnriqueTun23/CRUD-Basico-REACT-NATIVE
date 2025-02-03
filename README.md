This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started CRUD BASIC APP

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install dependencies

The first step is to install the corresponding dependencies since the project was done with node  **v21.7.2**:

```sh
# Using npm
npm install

# OR using Yarn
yarn
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npx react-native run-android

# OR using Yarn
yarn react-native run-android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

## Step 3: Install json-server

This step is necessary because there is a dependency to make the example of the raw:
```sh
npm i json-server
```

## Step 4: Raise json-server
> **Note**: For Windows you need to do the following steps

Get the ip in windows
```sh
    ipconfig
```
Copy the IP in this case it is obtained as in the example below
```sh
    Dirección IPv4. . . . . . . . . . . . . . : 192.168.1.119
```
Raise the data application to be able to do tests
```sh
json-server --host 192.168.0.11 --port 3000  db.json
```
---
To wake up a mac book just run the following command:
```sh
    json-server db.json
```
## Step 5: Demo

![demoCrudRN](https://github.com/user-attachments/assets/e577d20f-b6eb-4c44-9c16-0e955f5e5586)
