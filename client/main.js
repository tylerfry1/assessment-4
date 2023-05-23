const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const FortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

FortuneBtn.addEventListener("click", getFortune);

const goalsBtn = document.getElementById("goalForm");
const goalsText = document.getElementById("Goal");

const postGoal = () => {
  const goalsValue = goals.value;
  axios.get("http://localhost:4000/api/goal", { goalsValue }).then((res) => {
    const { data, status } = res;
    if (status === 200) {
      alert("your goals has been added");
    } else {
      alert("Something Went Wrong");
      console.error("Status came back with status code: $(status}");
    }
  });
};
