var bio = {
	"name" : "Zoltan Albert",
	"role" : "Front-End Web Developer",
	"welcomeMessage" : "Hiya",	
	"contacts" : {
		"mobile" : "202-455-8679",
		"email" : "znalbert@gmail.com",
		"github" : "demiror",
    "linkedin" : "znalbert",
		"twitter" : "@demiror",
		"locations" : ["Nashville, TN", "Budapest, Hungary"]
	},
	"skills" : ["HTML/CSS", "JavaScript", "SQL", "Teaching", "Mandarin Chinese"],
	"bioPic" : "images/prof.jpg"
};

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile); 
  var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
  // var formattedTwitter = HTMLgithub.replace(/%data%/g, bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
  var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  var formattedLocation = HTMLlocation.replace(/%data%/g, bio.contacts.locations[0]);

  $("#header").prepend(formattedName + formattedRole);
  $("#header").append(formattedPic);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  // $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLinkedIn);
  $("#topContacts").append(formattedLocation);


  if(bio.skills.length > 0){
	  $("#header").append(HTMLskillsStart);
	  for (skill in bio.skills){
		  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		  $("#skills").append(formattedSkill);
	  }
  }
};

bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "US Navy",
			"title" : "Cryptologic Linguist",
			"dates" : "Feb '04 - Feb '10",
			"location" : "Kunia, HI",
			"description" : "While in the Navy I served a Chinese linguist for the National Security Agency/Central Security Service Hawaii.  During this time I started by working in operations, but in under a year had moved into the role of Training Manager for my department of over 500.  While in the role of Training Manager I developed a database to track our training program and trainee progress. From there I transitioned with my database to the role of Training Standards and Evaluations Manager for the Hawaii Signals Intelligence Directorate's 1,300 personnel.  During this time I was certified as an Adjunct Trainer with the NSA where I developed and delivered training on HTML and CSS to Joint Service personnel and NSA civilians.  I finished my tour in Hawaii with being awarded a Joint Service Commendation medal."
		},
		{
			"employer" : "Amazon.com",
			"title" : "Search & Rescue Associate",
			"dates" : "Nov 12 - Apr 15",
			"location" : "Huntington, WV",
			"description" : "I started my time working with Amazon Customer Service by being actively involved in the internal process improvement mechanism.  During this time I impacted company-wide policy for associates as well as the features of customer facing e-mails.  I went on to be a Seasonal Lead, and during this time I co-led a process improvement event that resulted in an improved customer experience as measured by over 56,000 customer contacts being saved from ever needing to occur in the latter half of 2014. From there I became a Business Analyst Apprentice, where I was able to further influence data based decision making through SQL queries on Amazon's internal Data Warehouse."
		}
	]
};

work.display = function(){
	if(work.jobs.length > 0){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)


			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

work.display();

var projects = {
	"project" : [
		{
			"title" : "Note Taking Web App",
			"dates" : "Aug 2015",
			"description" : "For Udacity's Introduction to Programming Nanodegree I created a web app with Python and Google Datastore with which users can take notes, and have others leave comments.",
      "images" : "none"
		},
    {
			"title" : "USPS Carrier Summit",
			"dates" : "Feb 2014",
			"description" : "Helped facilitate a Amazon kaizen-style summit between VIPs from the US Postal Service and various stakeholders within Amazon, including the Amazon's Director of Transportation and the Director of Customer Service for the Americas. Then, in the role of Business Analyst Apprentice, I worked on the post-summit analysis of cost savings that resulted from the cooperation between the USPS and Amazon.",
			"images" : "none"
		},
		{
			"title" : "Incorrect Shipping Address Kaizen",
			"dates" : "Feb 2014",
			"description" : "Co-led this Amazon process improvement event dealing with customers who have had packages delivered to the wrong address. Created new policy with led to a reduction of 56,000 customer contacts for the latter half of 2014, and is projected to reduce the need for over 100,000 customer contacts in 2015.",
      "images" : "none"
		},
    {
			"title" : "Developed Intro to HTML/CSS for NSA/CSS Hawaii",
			"dates" : "Jun 2008",
			"description" : "Developed a three day course on HTML/CSS and delivered it quarterly to Joint Service and NSA civilian personnel.",
			"images" : "none"
		},
    {
			"title" : "Hawaii Signals Intelligence Directorate Training Database",
			"dates" : "Mar 2007",
			"description" : "During my time as a naval linguist I went from no knowledge of relational databases to creating a database to shine the spotlight my department's training program.  Within a year of development the database became a command level tool with which leadership could find the training status of all their personnel at the click of a button. Using the database the command was able to reduce delinquencies within the training program from 30+% to under 5%.",
			"images" : "none"
		}
	]
}

projects.display = function(){
	if (projects.project.length > 0){
		for (proj in projects.project){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
		}
	}
};

projects.display();

var education = {
  "schools" : [
    {
      "name" : "Defense Language Institute",
      "location" : "Monterey, CA",
      "degree" : "AA",
      "majors" : ["Mandarin Chinese"],
      "dates" : "Jun '04 - Oct '05",
      "url" : "http://www.dliflc.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Introduction to Programming Nanodegree",
      "school" : "Udacity",
      "dates" : "Oct 2015",
      "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
      "title" : "Learn to Program: The Fundamentals",
      "school" : "Coursera:  University of Toronto",
      "dates" : "Dec 2012",
      "url" : "https://www.coursera.org/course/programming1"
    }
  ]
};

education.display = function(){
  if (education.schools.length > 0){
    for (school in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }

  if (education.onlineCourses.length) > 0){
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses){
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
 
      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
};

education.display();

$("#main").append(internationalizeButton)
$("#mapDiv").append(googleMap);

