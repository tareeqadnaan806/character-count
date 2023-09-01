const inputvalue = document.getElementById("inputValue");

inputvalue.addEventListener("input", (e) => {
    const value = inputvalue.value.length;
    console.log(value);
    document.getElementById("total").innerText = value
    document.getElementById("remaining").innerText = -(value-50)
});

