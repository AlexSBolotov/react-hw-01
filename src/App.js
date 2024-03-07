import user from "./Profile/user.json";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import FriendsList from "./FriendsList/FriendsList";
import friends from "./FriendsList/friends.json";
import TransactionsList from "./TransactionsList/TransactionsList";
import transactions from "./TransactionsList/transactions.json";

const statTitle = "Upload files";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title={statTitle} data={data} />
      <FriendsList data={friends} />
      <TransactionsList data={transactions} />
    </>
  );
};

export default App;
