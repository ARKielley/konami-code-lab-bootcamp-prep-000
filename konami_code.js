const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const codeWhich = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    debugger;
    const key = parseInt(e.detail||e.which);
    if (key === codeWhich[index]) {
      console.log(`did ${codeWhich[index]}`);
      index++;
      if (index === codeWhich.length) {
        console.log(`should be congrats`);
        debugger;
        window.alert('Congratulations!');
        console.log('aftercongrats');
        index = 0;
      }
    } else {
      index = 0;
      console.log(`failed ${key}`);
    }
  })
}
