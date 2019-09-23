import WatlletLogo from "../image/Android_greenrobot.svg";
import HUMLogo from "../image/Arduino_Logo.svg";
import PythonLogo from "../image/python-logo-generic.svg";

export var projectData = [
  { title: "", details: [] },
  {
    title: "AR Hand Gesture Battle Simulator",
    desc: "AR Hand Gesture Battle Simulator",
    details: [
      "Constructed an AR battle station where users can interact with each other using hand gestures and voice commands",
      "Hand gesture recognition done with Keras data sent using Server-Sent Events to frontend written in React paired with holographic display",
      "Chosen as a finalist out of 300+ team at Hack the North 2019; winner of Voiceflow API challenge"
    ],
    url: "https://bit.ly/2mm1CJn",
    background: null
  },
  {
    title: "Watllet",
    desc: "Fast and convenient way to check Waterloo Watcard balance",
    details: [
      "Designed and programmed a lightweight alternative to the official app which scraped the website using native Android Webview without any external libraries; achieved up to 50% faster startup time than the official app app",
      "Created additional features including daily budget and daily usage to help users manage their spending"
    ],
    url: "https://github.com/daniel-luan/watllet",
    background: WatlletLogo
  },
  {
    title: "HUM",
    desc: "Hardware interface for the windows core audio volume mixer",
    details: [
      "Constructed a polished hardware interface for the volume mixer using potentiometers and switches",
      "Designed custom lightweight USB HID protocol to ensure cross-platform compatibility and low latency",
      "Created a user-friendly Python frontend to receive and process data, then interact with the Windows volume mixer through Windows Core Audio library"
    ],
    url: "https://github.com/daniel-luan/hum",
    background: HUMLogo
  },
  {
    title: "Web-Based Scouting",
    desc: "Web Based Scouting System",
    details: [
      "Modernized old pen and paper method employed by my robotics team, reduced human errors and increased efficiency",
      "Built a scalable and modular backend with Python, Django, MongoDB, and Nginx proxy",
      "Enhanced data visualization by providing the user with a comprehensive set of graphs and tables, to aid in decision making based on multiple metrics"
    ],
    url: "https://github.com/daniel-luan/Project_Improved_Inquir",
    background: PythonLogo
  }
];
