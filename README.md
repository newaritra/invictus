# invictus
The app was built with the help of React JS to build the frontend of the app and the API call was made with the help of a library named axios which made a request to the URL provided for the assignment.
The app is deployed on [a firebase site](https://invictus-e01dd.web.app/).
### FRONTEND [REACT JS]
#### TECH USED:
1.React JS and its hooks<br/>
2.`Axios`
#### COMPONENTS:
#### 1.Input[To enter the number of top frequency words we need]
![image](https://user-images.githubusercontent.com/56667293/118403984-aa144b00-b68e-11eb-8dbb-c8f4ddcdd9a9.png)
<br/>The input component takes a number as input and displays the N top ranking words based on the frequency of the words in the file. The table is rendered after a valid input is entered in the input field ,i.e, a number between 0 and the number of unique words in the  file, otherwise a warning is displayed below the input field.

#### 2.Homescreen
The Homescreen component is used to display the input form and the table.
![image](https://user-images.githubusercontent.com/56667293/118404022-d9c35300-b68e-11eb-9a0b-757fc10a06ee.png)
<br/>The table that is rendered on valid input.

#### Test Cases:
On entering a number that is negative or above the number of unique words a warning is displayed.
![image](https://user-images.githubusercontent.com/56667293/118404170-535b4100-b68f-11eb-82fd-796c01bd43bd.png)
<br/>The input type is `number` so the user will need to enter numerical values by default.

