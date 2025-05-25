//Condition Exercise # 01

const isLoggedIn = true;
const isProSubscriber = false;

if (!isLoggedIn) {
  console.log("please login first");
} else if (isLoggedIn && !isProSubscriber) {
  console.log('here is your data, consider subscribing to get access to more features');
} else if (isLoggedIn && isProSubscriber) {
  console.log("Thanks, you are a pro subscriber.");
}
