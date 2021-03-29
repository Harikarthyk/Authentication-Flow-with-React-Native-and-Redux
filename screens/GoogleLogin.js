import React, {Component, useEffect} from 'react';
import {Linking, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

// class GoogleLogin extends Component {
//   webview = null;
//   render() {
//     return (
//       <View>
//         <WebView
//           ref={ref => (this.webview = ref)}
//           source={{uri: 'https://logrocket.com/'}}
//           // onNavigationStateChange={this.handleWebViewNavigationStateChange}
//         />
//         {console.log('Web')}
//       </View>
//     );
//   }

//   handleWebViewNavigationStateChange = newNavState => {
//     // newNavState looks something like this:
//     // {
//     //   url?: string;
//     //   title?: string;
//     //   loading?: boolean;
//     //   canGoBack?: boolean;
//     //   canGoForward?: boolean;
//     // }
//     const {url} = newNavState;
//     if (!url) return;

//     // handle certain doctypes
//     if (url.includes('.pdf')) {
//       this.webview.stopLoading();
//       // open a modal with the PDF viewer
//     }

//     // one way to handle a successful form submit is via query strings
//     if (url.includes('?message=success')) {
//       this.webview.stopLoading();
//       // maybe close this view?
//     }

//     // one way to handle errors is via query string
//     if (url.includes('?errors=true')) {
//       this.webview.stopLoading();
//     }

//     // redirect somewhere else
//     if (url.includes('google.com')) {
//       const newURL = 'https://logrocket.com/';
//       const redirectTo = 'window.location = "' + newURL + '"';
//       this.webview.injectJavaScript(redirectTo);
//     }
//   };
// }

const GoogleLogin = () => {
  useEffect(() => {
    Linking.openURL('https://f16a28ccb138.ngrok.io/login/google');
    Linking.getInitialURL().then(url => {
      if (url) {
        handleUrl(url);
      }
    });
    Linking.addEventListener('url', handleUrl);
  });
  const handleUrl = url => {
    console.log('Url is ', url);
  };

  return (
    <View>
      <Text>Hello </Text>
    </View>
  );
};

export default GoogleLogin;
