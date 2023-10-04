import { LogBox } from "react-native";

// Ignore the specific warning
LogBox.ignoreLogs([
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
]);

// Override the console.warn method to log the warning
const originalWarn = console.warn;
console.warn = function (message) {
  if (
    message.includes(
      "Sending `onAnimatedValueUpdate` with no listeners registered."
    )
  ) {
    // Log the message or add custom debugging logic here
    // For example, you can log a message to help identify the source
    console.log("Received `onAnimatedValueUpdate` warning:", message);
  } else {
    // For other warnings, use the original console.warn
    originalWarn.apply(console, arguments);
  }
};
