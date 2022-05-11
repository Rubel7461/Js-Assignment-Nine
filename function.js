const student_info = [
    {
        Name : 'Rubel Hasan',
        Roll : 05,
        Subject : 'Management',
        Seasion : '1st Year',
        Skill : 'Js Developer',
        result : {
            Bn : 85,
            En : 67,
            Ma : 80,
            Is : 90,
            So : 90,
        },
    },
    {
        Name : 'Shahab uddin',
        Roll : 04,
        Subject : 'Bangla',
        Seasion : '2st Year',
        Skill : 'Js Developer',
        result : {
            Bn : 85,
            En : 67,
            Ma : 80,
            Is : 90,
            So : 40,
        },
    },
    {
        Name : 'Abir Hasan',
        Roll : 50,
        Subject : 'Management',
        Seasion : '1st Year',
        Skill : 'Js Developer',
        result : {
            Bn : 85,
            En : 67,
            Ma : 80,
            Is : 90,
            So : 70,
        },
    },
    {
        Name : 'Sobuj Hasan',
        Roll : 15,
        Subject : 'Management',
        Seasion : '2st Year',
        Skill : 'Python Developer',
        result : {
            Bn : 85,
            En : 67,
            Ma : 80,
            Is : 90,
            So : 50,
        },
    },
    {
        Name : 'Ikbal Hasan',
        Roll : 06,
        Subject : 'Management',
        Seasion : '2st Year',
        Skill : 'PHP Developer',
        result : {
            Bn : 85,
            En : 67,
            Ma : 80,
            Is : 90,
            So : 80,
        },
    },
];

// student_info.forEach((data,index) => {
//     console.log(`${index + 1} = ${data.Name} = ${data.Roll} their Bangla Result is = ${data.result.Bn}`);
// });

const student_info_string = JSON.stringify(student_info);

// console.log(student_info_string);

const student_info_object = JSON.parse(student_info_string);

// console.log(student_info_object);

// student_info_object.forEach((mydata,index) => {
//     if (mydata.Name == "Ikbal" || mydata.Roll == 06 ) {
//         console.log(mydata.Name);
//     } else {
        
//     }
// });

// let total = 0;
// student_info_object.forEach((info,index) => {
//     // console.log(info.result.So);
//     total = (info.result.So);
//     console.log(`${index + 1} = ${total}`);
// });

