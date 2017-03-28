// OOP
// object-oriented programming

var BurnMeter = {
	data: {
		client: null,
		time_allocated: null,
		time_elapsed: null,
		time_start: null,
		time_end: null,
		cost_estimated: null,
		cost_total: null,
		over_time: false,
		over_cost: false,
		attendees: []
	},
	addAttendee: function( attendee ) {
		this.attendees.push( attendee );
	},
	reset: function(){
		this.data.client = null;
		this.data.time_allocated = null;
		this.data.time_elapsed = null;
		this.data.time_start = null;
		this.data.time_end = null;
		this.data.cost_estimated = null;
		this.data.cost_total = null;
		this.data.over_time = null;
		this.data.over_cost = null;
		this.data.attendees = [];
	},
	submitData: function(){
		$.ajax({
	       url: 'https://edelman-art-studio.herokuapp.com/burn-meter/add-meeting',
	       type: 'POST',
	       data: JSON.stringify( this.data ),
	       contentType: "application/json",
	       success: function(res) {
		        console.log('Data sent to server');
		        console.log(res);
		    }
	    });
	}
}


// Object
// new Attendee(params)
var Attendee = function( name ){
	this.role = '';
	this.team = '';
	this.time_start = null;
	this.time_end = null;
	this.time_start_perc = null;
	this.time_end_perc = null;
	this.rate = null;
	this.name = name;
}

Attendee.prototype = {
	setRole: function( role ){
		this.role = role;
	},
	setTeam: function( team ){
		this.team = team;
	},
	setRate: function( rate ){
		this.rate = rate;
	},
	start: function(){
		this.time_start = new Date();
	},
	end: function(){
		this.time_end = new Date();
	},
	calcTimePerc: function( appTimeStart, appTimeEnd ){
		var timeRange = appTimeEnd - appTimeStart;
		this.time_start_perc = (appTimeStart - this.time_start) / timeRange;
		this.time_end_perc = (appTimeEnd - this.time_end) / timeRange;
	},
	sayHello: function(){
		console.log( "Hello my name is", this.name );
	}
};

var myAttendee = new Attendee();
myAttendee.setRole( "ECD" );
myAttendee.setRate( 120 );
myAttendee.start();
// time happens
myAttendee.end();

BurnMeter.addAttendee( myAttendee );


BurnMeter.startApp();
BurnMeter.addAttendee();
BurnMeter.endApp(); // calculate all attendee time percentages



// BurnMeter.reset()






























