import React from "react";
import "./FAQ.css";
import Topbar from "./Topbar";
import Bottombar from "./BottomBar";
function FAQ(){
    return (
        <>
        <Topbar />
        <div className="faq">
     1. How do I comment on code?<br/>
          - To comment on code, use "//" for single-line comments and "/* */" for multi-line comments.<br/>

 2. What code formatting is supported?<br/>
- We support various languages. Ensure your code follows standard indentation practices.<br/>

 3. How is privacy and security handled?<br/>
- Your data is handled securely, and we prioritize user privacy. Read our privacy policy for details.<br/>

 4. How do I manage my account?<br/>
 - Create an account, reset your password, or manage your profile from the user settings menu.<br/>

 5. Are there community guidelines?<br/>
 - Yes, please maintain respectful and constructive communication. Violations may result in account restrictions.<br/>

 6. How can I search for code snippets?<br/>
 - Utilize tags, keywords, and filters for efficient code snippet search.<br/>

 7. What are the code licensing terms?<br/>
 - Code snippets are shared under specified licenses. Be sure to check and adhere to them.<br/>

 8. Encountering issues with code rendering?<br/>
 - Clear your browser cache or try a different browser. For account issues, check our troubleshooting guide.<br/>

 9. Where can I provide feedback or seek support?<br/>
 - Send feedback through our contact form or visit our support forum for assistance.<br/>

 10. How are updates and changes communicated?<br/>
   - Stay informed about updates through our changelog and announcements on the platform.<br/>

11. Can I collaborate with others on code?<br/>
  - Yes, invite collaborators to contribute or provide feedback on your code.<br/>

12. Are there accessibility features?<br/>
- Our platform is designed with accessibility in mind. Please let us know if you encounter any issues.
        </div>
        <Bottombar />
        </>
    )
}
export default FAQ;