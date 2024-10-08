const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value)); //getElementsByClassName returns an HTMLCollection, spread opperator [... ] converts it to an array before assigning it
    //map iterates over the array and Number() converts the strings into numbers before they are assigned to inputValues

    const sortedValues = inputValues.sort((a,b) => {
        return a-b;
    });

    updateUI(sortedValues);
}

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let x = i + 1; x < array.length; x++) {
            if (array[x] < array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > currValue) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currValue;
    }
    return array;
}

sortButton.addEventListener("click", sortInputArray);