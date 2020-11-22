const disks = document.querySelectorAll('.disk');
const body = document.querySelector('body');

function setBackground(disk) {
    console.log(disk.id);
    body.style.backgroundColor = disk.id;
}

for (const disk of disks) {
    disk.addEventListener('click', function(){ setBackground(disk); });
}