export const dataBase = [
    {
        id: '1',
        quizName: 'Javascript Quiz',
        questions: [
            {
                question: 'Which of the following is true about variable naming conventions in JavaScript?',
                options: [
                    {
                        option: 'JavaScript variable names must begin with a letter or the underscore character.',
                        isRight: false
                    },
                    {
                        option: ' JavaScript variable names are case sensitive.',
                        isRight: false
                    },
                    {
                        option: 'Both of the above.',
                        isRight: true
                    },
                    {
                        option: 'None of the above.',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'Which built-in method returns the calling string value converted to upper case?',
                options: [
                    {
                        option: 'toUpperCase()',
                        isRight: true
                    },
                    {
                        option: 'toUpper()',
                        isRight: false
                    },
                    {
                        option: 'changeCase(case)',
                        isRight: false
                    },
                    {
                        option: 'None of the above.',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'How do you call a function named "myFunction"?',
                options: [
                    {
                        option: 'call function myFunction()  ',
                        isRight: false
                    },
                    {
                        option: 'myFunction()  ',
                        isRight: true
                    },
                    {
                        option: 'call myFunction()',
                        isRight: false
                    },
                    {
                        option: 'None of the above.',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'How to insert a comment that has more than one line?',
                options: [
                    {
                        option: '<!--This comment hasmore than one line-- > ',
                        isRight: false
                    },
                    {
                        option: '//This comment has more than one line//',
                        isRight: false
                    },
                    {
                        option: '/*This comment has more than one line*/  ',
                        isRight: true
                    },
                    {
                        option: '?This comment has more than one line?  ',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'What is the correct way to write a JavaScript array?',
                options: [
                    {
                        option: 'var colors = "red", "green", "blue"',
                        isRight: false
                    },
                    {
                        option: 'var colors = (1:"red", 2:"green", 3:"blue")',
                        isRight: false
                    },
                    {
                        option: 'var colors = ["red", "green", "blue"]',
                        isRight: true
                    },
                    {
                        option: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                        isRight: false
                    },
                ],
                points: 5
            },


        ]
    },

    {
        id: "2",
        quizName: 'CSS Quiz',
        questions: [
            {
                question: 'Which of the following selector matches all elements of a type?',
                options: [
                    {
                        option: 'The Type Selector',
                        isRight: true
                    },
                    {
                        option: 'The Universal Selector',
                        isRight: false
                    },
                    {
                        option: 'The Descendant Selector',
                        isRight: false
                    },
                    {
                        option: 'The Class Selector',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'Which of the following property is used to set the background color of an element?',
                options: [
                    {
                        option: 'background-color',
                        isRight: true
                    },
                    {
                        option: 'background-image',
                        isRight: false
                    },
                    {
                        option: ' background-repeat',
                        isRight: false
                    },
                    {
                        option: 'background-position',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'Which of the following property is used as shorthand to specify a number of other font properties?',
                options: [
                    {
                        option: 'font-size',
                        isRight: false
                    },
                    {
                        option: 'font',
                        isRight: true
                    },
                    {
                        option: 'font-variant',
                        isRight: false
                    },
                    {
                        option: 'font-weight',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'Which of the following value of cursor shows it as a pointing hand?',
                options: [
                    {
                        option: 'crosshair',
                        isRight: false
                    },
                    {
                        option: 'default',
                        isRight: false
                    },
                    {
                        option: 'pointer',
                        isRight: true
                    },
                    {
                        option: 'move',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'CSS stands for -',
                options: [
                    {
                        option: 'Cascade style sheets',
                        isRight: false
                    },
                    {
                        option: 'Color and style sheets',
                        isRight: false
                    },
                    {
                        option: 'Cascading style sheets',
                        isRight: true
                    },
                    {
                        option: 'None of the above',
                        isRight: false
                    },
                ],
                points: 5
            },


        ]
    },
    {
        id: '3',
        quizName: 'React Quiz',
        questions: [
            {
                question: 'What of the following is used in React.js to increase performance?',
                options: [
                    {
                        option: 'Original DOM',
                        isRight: false
                    },
                    {
                        option: 'Virtual DOM',
                        isRight: true
                    },
                    {
                        option: 'Both A and B.',
                        isRight: false
                    },
                    {
                        option: 'None of the above.',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: ' How many numbers of elements a valid react component can return?',
                options: [
                    {
                        option: '1',
                        isRight: true
                    },
                    {
                        option: '2',
                        isRight: false
                    },
                    {
                        option: '4',
                        isRight: false
                    },
                    {
                        option: '5',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: ' Which of the following is used to pass data to a component from outside in React.js?',
                options: [
                    {
                        option: 'SetState',
                        isRight: false
                    },
                    {
                        option: 'Render with arguments',
                        isRight: false
                    },
                    {
                        option: 'Props',
                        isRight: true
                    },
                    {
                        option: 'PropTypes',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'Which of the following best defines the "key" prop?',
                options: [
                    {
                        option: '"Key" prop is used to look pretty, and there is no benefit whatsoever.',
                        isRight: false
                    },
                    {
                        option: 'Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm.',
                        isRight: true
                    },
                    {
                        option: 'It is one of the attributes in HTML.',
                        isRight: false
                    },
                    {
                        option: 'It is NOT commonly used in an array.',
                        isRight: false
                    },
                ],
                points: 5
            },

            {
                question: 'What is the use of the create-react-app command in the React.js application?',
                options: [
                    {
                        option: 'It is used to update a React app.',
                        isRight: false
                    },
                    {
                        option: 'It is used to create a new React app.',
                        isRight: true
                    },
                    {
                        option: 'It is used to install dependencies.',
                        isRight: false
                    },
                    {
                        option: 'None of the above.',
                        isRight: false
                    },
                ],
                points: 5
            },


        ]
    },
]