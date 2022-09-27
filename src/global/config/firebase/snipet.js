

const [task, setTask] = useState([]);

function deleteTask(id) {
    database.collection("Tasks").doc(id).delete();
}

useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
        });
        setTask(list);
    });
}, []);

function addTask() {
    database.collection('Tasks').add({
        description: description,
        status: false
    })
    navigation.navigate("Task");
}

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id

    function editTask(description, id) {
        database.collection("Tasks").doc(id).update({
            description: description,
        })
        navigation.navigate("Task")
    }
