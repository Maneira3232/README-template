function generateReadme(data) {
    return `# ${data.projectTitle}


    ## Table of Contents
    [Description](#Description)
    
    ## Description: 

    ${data.description}



    `;
}

module.exports = generateReadme