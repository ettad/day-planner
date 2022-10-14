var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

var currentTime = moment().hour();
console.log(currentTime);

$(document).ready(function () {

        // function timeBlockColor () {


        // }

        // timeBlockColor();


        // code block save task for each hour
        $('.saveBtn').click(function () {

            var hour8 = document.getElementById('8').value;
			localStorage.setItem('taskAt8', hour8);

			var hour9 = document.getElementById('9').value;
			localStorage.setItem('taskAt9', hour9);

			var hour10 = document.getElementById('10').value;
			localStorage.setItem('taskAt10', hour10);

			var hour11 = document.getElementById('11').value;
			localStorage.setItem('taskAt11', hour11);

			var hour12 = document.getElementById('12').value;
			localStorage.setItem('taskAt12', hour12);
            
			var hour13 = document.getElementById('13').value;
			localStorage.setItem('taskAt13', hour13);

			var hour14 = document.getElementById('14').value;
			localStorage.setItem('taskAt14', hour14);

			var hour15 = document.getElementById('15').value;
			localStorage.setItem('taskAt15', hour15);

			var hour16 = document.getElementById('16').value;
			localStorage.setItem('taskAt16', hour16);

			var hour17 = document.getElementById('17').value;
			localStorage.setItem('taskAt17', hour17);
        });
        
        //code-block gets task for each hour
        var saved8 = localStorage.getItem('taskAt8');
        document.getElementById('8').value = saved8;

        var saved9 = localStorage.getItem('taskAt9');
        document.getElementById('9').value = saved9;

        var saved10 = localStorage.getItem('taskAt10');
        document.getElementById('10').value = saved10;

        var saved11 = localStorage.getItem('taskAt11');
        document.getElementById('11').value = saved11;

        var saved12 = localStorage.getItem('taskAt12');
        document.getElementById('12').value = saved12;

        var saved13 = localStorage.getItem('taskAt13');
        document.getElementById('13').value = saved13;

        var saved14 = localStorage.getItem('taskAt14');
        document.getElementById('14').value = saved14;

        var saved15 = localStorage.getItem('taskAt15');
        document.getElementById('15').value = saved15;

        var saved16 = localStorage.getItem('taskAt16');
        document.getElementById('16').value = saved16;

        var saved17 = localStorage.getItem('taskAt17');
        document.getElementById('17').value = saved17;

});
