# PWCAssignment : 
1. Global Dependencies
 - Install Maven
  $ install maven
 
2. Clone the source code and import as maven project in your IDE.
3. Project Dependencies
   - checkout the repository
   - Check that packages are available
       $ C:\PwC-CucumberTestNG\PwC-CucumberTestNG
4. Update your chrome driver in Config.properties file and provide path of data.properties file based on your local path
5. You may also want to run the command below to check for outdated dependencies. Please be sure to verify and review updates before editing your pom.xml file as they may not be compatible with your code.
   $ mvn versions:display-dependency-updates
5. Running Tests
  -   $ mvn test
