var bio = {
    'name': 'Zoltan Albert',
    'role': 'Front-End Web Developer',
    'welcomeMessage': 'Taught English in Budapest, Chinese linguist in ' +
        'Hawaii, now sporting a beard on a Tennesee farm, and looking forward' +
        ' to the next adventure.',
    'contacts': {
        'location': 'Nashville, TN'
        'email': 'znalbert@gmail.com',
        'github': 'znalbert',
        'linkedin': 'znalbert',
        'twitter': '@',
        'mobile': '202-455-8679',
    },
    'skills': ['HTML/CSS', 'JavaScript', 'SQL', 'Teaching', 'Mandarin Chinese'],
    'biopic': 'images/prof1.jpg'
};

bio.display = function() {
    var Role = HTMLheaderRole.replace("%data%", bio.role);
    var Name = HTMLheaderName.replace("%data%", bio.name);
    var Pic = HTMLbioPic.replace("%data%", bio.biopic);
    var WelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#bio").prepend(Name + Role);
    $("#bio").append(Pic, WelcomeMessage);

    if (bio.skills.length > 0) {
        $("#bio").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var Skill = HTMLskills.replace("%data%", skill);
            $("#skills").append(Skill);
        });
    }
};

bio.contacts.display = function(section) {
    var Mobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    var Email = HTMLemail.replace(/%data%/g, bio.contacts.email);
    var Github = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    var LinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var Location = HTMLlocation.replace(/%data%/g, bio.contacts.location);

    $(section).append(Mobile, Email, Github, LinkedIn, Location);
};

bio.display();
bio.contacts.display("#topContacts");
bio.contacts.display("#footerContacts");

var work = {
    "jobs": [{
        "employer": "US Navy",
        "title": "Cryptologic Linguist",
        "dates": "Feb '04 - Feb '10",
        "location": "Kunia, HI",
        "description": "While in the Navy I served a Chinese linguist for the" +
            " National Security Agency/Central Security Service Hawaii. " +
            "During this time I maintained a clearance for Top Secret/" +
            "Sensitive Compartmented Information and started by working in " +
            "operations. In under a year moved into the role of Training " +
            "Manager for my department of over 500.  While in the role of " +
            "Training Manager I developed a database to track our training " +
            "program and trainee progress. From there I transitioned with my " +
            "database to the role of Training Standards and Evaluations " +
            "Manager for the Hawaii Signals Intelligence Directorate's 1,300 " +
            "personnel.  During this time I was certified as an Adjunct " +
            "Trainer with the NSA where I developed and delivered training on" +
            "HTML and CSS to Joint Service personnel and NSA civilians.  I " +
            "finished my tour in Hawaii with being awarded a Joint Service " +
            "Commendation medal."
    }, {
        "employer": "Amazon.com",
        "title": "Search & Rescue Associate",
        "dates": "Nov 12 - Apr 15",
        "location": "Huntington, WV",
        "description": "I started my time working with Amazon Customer " +
            "Service by being actively involved in the internal process " +
            "improvement mechanism.  During this time I impacted company-wide" +
            " policy for associates as well as the features of customer " +
            "facing e-mails.  I went on to be a Seasonal Lead, and during " +
            "this time I co-led a process improvement event that resulted in " +
            "an improved customer experience as measured by over 56,000 " +
            "customer contacts being saved from ever needing to occur in the " +
            "latter half of 2014. From there I became a Business Analyst " +
            "Apprentice, where I was able to further influence data based " +
            "decision making through SQL queries on Amazon's internal Data " +
            "Warehouse."
    }]
};

work.display = function() {
    if (work.jobs.length > 0) {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var Employer = HTMLworkEmployer.replace("%data%", job.employer);
            var Title = HTMLworkTitle.replace("%data%", job.title);
            var Dates = HTMLworkDates.replace("%data%", job.dates);
            var Location = HTMLworkLocation.replace("%data%", job.location);
            var Description = HTMLworkDescription.replace("%data%",
                job.description);

            $(".work-entry:last").append(Employer + Title, Dates, Location,
                Description);
        });
    }
};

work.display();

var projects = {
    "project": [{
        "title": "Note Taking Web App",
        "dates": "Aug 2015",
        "description": "For Udacity's Introduction to Programming Nanodegree " +
            "I created a web app with Python and Google Datastore with which " +
            "users can take notes, and have others leave comments.",
        "images": [
            "http://placehold.it/250x250",
            "http://placehold.it/250x250"
        ]
    }, {
        "title": "USPS Carrier Summit",
        "dates": "Feb 2014",
        "description": "Helped facilitate a Amazon kaizen-style summit " +
            "between VIPs from the US Postal Service and various stakeholders" +
            " within Amazon, including the Amazon's Director of " +
            "Transportation and the Director of Customer Service for the " +
            "Americas. Then, in the role of Business Analyst Apprentice, I " +
            "worked on the post-summit analysis of cost savings that resulted" +
            " from the cooperation between the USPS and Amazon.",
        "images": [
            "http://placehold.it/250x250",
            "http://placehold.it/250x250"
        ]
    }, {
        "title": "Incorrect Shipping Address Kaizen",
        "dates": "Feb 2014",
        "description": "Co-led this Amazon process improvement event dealing " +
            "with customers who have had packages delivered to the wrong " +
            "address. Created new policy with led to a reduction of 56,000 " +
            "customer contacts for the latter half of 2014, and is projected " +
            "to reduce the need for over 100,000 customer contacts in 2015.",
        "images": [
            "http://placehold.it/250x250",
            "http://placehold.it/250x250"
        ]
    }, {
        "title": "Developed Intro to HTML/CSS for NSA/CSS Hawaii",
        "dates": "Jun 2008",
        "description": "Developed a three day course on HTML/CSS and " +
            "delivered it quarterly to Joint Service and NSA civilian " +
            "personnel.",
        "images": [
            "http://placehold.it/250x250",
            "http://placehold.it/250x250"
        ]
    }, {
        "title": "Hawaii Signals Intelligence Directorate Training Database",
        "dates": "Mar 2007",
        "description": "During my time as a naval linguist I went from no " +
            "knowledge of relational databases to creating a database to " +
            "shine the spotlight my department's training program.  Within a " +
            "year of development the database became a command level tool " +
            "with which leadership could find the training status of all " +
            "their personnel at the click of a button. Using the database the" +
            "command was able to reduce delinquencies within the training " +
            "program from 30+% to under 5%.",
        "images": [
            "http://placehold.it/250x250",
            "http://placehold.it/250x250"
        ]
    }]
};

projects.display = function() {
    if (projects.project.length > 0) {
        projects.project.forEach(function(proj) {
            $("#projects").append(HTMLprojectStart);
            var ProjectTitle = HTMLprojectTitle.replace("%data%", proj.title);
            var ProjectDates = HTMLprojectDates.replace("%data%", proj.dates);
            var ProjectDescription = HTMLprojectDescription.replace("%data%",
                proj.description);

            $(".project-entry:last").append(ProjectTitle, ProjectDates,
                ProjectDescription);

            proj.images.forEach(function(img) {
                var ProjectImage = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(ProjectImage);
            });
        });
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "Defense Language Institute",
        "location": "Monterey, CA",
        "degree": "AA",
        "majors": ["Mandarin Chinese"],
        "dates": 2005,
        "url": "http://www.dliflc.edu/"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming Nanodegree",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com/course/" +
            "intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Learn to Program: The Fundamentals",
        "school": "Coursera - University of Toronto",
        "dates": 2012,
        "url": "https://www.coursera.org/course/programming1"
    }]
};

education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var SchoolName = HTMLschoolName.replace("%data%", school.name);
            var SchoolDegree = HTMLschoolDegree.replace("%data%",
                school.degree);
            var SchoolDates = HTMLschoolDates.replace("%data%",
                school.dates);
            var SchoolLocation = HTMLschoolLocation.replace("%data%",
                school.location);
            var SchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            $(".education-entry:last").append(SchoolName + SchoolDegree,
                SchoolDates, SchoolLocation, SchoolMajor);
        });
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            var OnlineURL = HTMLonlineURL.replace("%data%", course.url);
            var OnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var OnlineSchool = HTMLonlineSchool.replace("%data%",
                course.school);
            var OnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(OnlineURL + OnlineTitle,
                OnlineSchool, OnlineDates);
        });
    }
};

education.display();

$("#mapDiv").append(googleMap);
