
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>

# Tech Stack

- Shadcn
- Next.js 15
- Clerk
- [Devicon](https://devicon.dev/)
- date-fns
- react-dropzone
- html-react-parser

<br/>

# Project Information

### Will contain Admin page to add in new projects. 

Data that will be inserted into database:

- Image landing page of project
- Date of creation and finish date of project
- Name of project
- Short Description of project
- Reason for creation of project
- Link to project: 
    - Github link
    - Public link to live project
- Tech Stack of Project
- [optional] Credit of Youtuber for tutorial of the project

#### Table Date Layout
- name
- description
- reason
- teach stack
- creation date
- finish date
- image
- github link
- active link
- category
- status
- credit
- credit link
- created at
- updated at

### Functions of the project

- Will be able to search for my projects
- To show experience with different tech stacks
- About me
    - Experience and previous work
    - Tech Stacks used
    - Contact details and socials
    - Brief description of me

## Project Pages

- Admin
- Projects
- Project
- About
- Home

<br/>

### Important Neon Database Information

When generating for database make sure previous enums are deleted in database or make it so they aren't created again before doing migration.

```bash
CREATE TYPE "public"."projectCategory" AS ENUM('tutorial', 'personal');--> statement-breakpoint
```

- Go to **SQL Editor**
- Then type following code below to delete enum from Neon database

```bash
DROP TYPE "public"."projectStatus"
```
### Lib Folder Info

- **convertFileToBase64**
    - Allows for images to be turned into string

<br>

- **makeIOSLocalDateString**
    - This makes sure when any data is sent to the database that the date will of the current local machine timezone