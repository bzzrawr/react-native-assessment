import { StyleSheet, Text, View, FlatList } from 'react-native';
import { compareDate, formatDate } from '../functions/dateFunction';

export const MainBody = () => {
  let items = [
    { id: 1, item_name: 'Tomato', expiry_date: '2022-06-30T09:16:01' },
    { id: 2, item_name: 'Cucumber', expiry_date: '2021-07-30T09:16:01' },
    { id: 3, item_name: 'Cherry', expiry_date: '2022-08-30T09:16:01' },
    { id: 4, item_name: 'Salad', expiry_date: '2023-07-30T09:16:01' },
    { id: 5, item_name: 'Mayo', expiry_date: '2021-09-30T09:16:01' },
    { id: 6, item_name: 'Eggs', expiry_date: '2022-10-30T09:16:01' },
    { id: 7, item_name: 'Curry Powder', expiry_date: '2021-07-30T09:16:01' },
    { id: 8, item_name: 'Grapes', expiry_date: '2022-07-30T09:16:01' },
    { id: 9, item_name: 'Salad Dressing', expiry_date: '2022-11-30T09:16:01' },
    { id: 10, item_name: 'Soya Milk', expiry_date: '2021-07-30T09:16:01' },
    { id: 11, item_name: 'Cream Cheese', expiry_date: '2021-06-30T09:16:01' },
    { id: 12, item_name: 'Apple Pie', expiry_date: '2022-09-30T09:16:01' },
    { id: 13, item_name: 'Cinnamon Bun', expiry_date: '2022-09-30T09:16:01' },
    { id: 14, item_name: 'Cheesecake', expiry_date: '2022-11-30T09:16:01' },
    { id: 15, item_name: 'Lemonade', expiry_date: '2022-09-30T09:16:01' },
    { id: 16, item_name: 'Chocolate Milk', expiry_date: '2024-09-30T09:16:01' },
    { id: 17, item_name: 'Yogurt', expiry_date: '2022-04-30T09:16:01' },
  ];

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={items.filter((item) => compareDate(item?.expiry_date))}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>
                {itemData?.item?.item_name} |{' '}
                {formatDate(itemData?.item?.expiry_date)}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#89c2eb',
  },
  goalText: {
    color: 'white',
  },
});
