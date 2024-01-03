import React from "react";
import styles from './instructor.module.css';

function Instructor({ data }) {
  const {
    name,
    instructor,
    course,
    testimonial
  } = data;

  return (
    <div className={styles.instructorCard}>
      <div className={styles.buttons}>
        <button> ABOUT</button>
        <button>INSTRUCTOR</button>
        <button>REVIEW</button>
      </div>

      {/* Left section of the Instructor Card */}
      <div className={styles.left}>
        <div><h1>About the course</h1></div>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<br /> totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <div>
          <h1>What to expect from the course</h1>
          <ul className={styles.tickmarklist}>
            {course.what_to_expect && course.what_to_expect.html_content && (
              <li dangerouslySetInnerHTML={{ __html: course.what_to_expect.html_content }} />
            )}
          </ul>
        </div>

        <div>
          <h1>Key topics covered</h1>
          <p>
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className={styles.tickmarklist}>
            {course.key_topics && course.key_topics.html_content && (
              <li dangerouslySetInnerHTML={{ __html: course.key_topics.html_content }} />
            )}
          </ul>
        </div>
        <div>
          <h1>About the Instructor</h1>
          <p>
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className={styles.tickmarklist}>
            {course.about_instructor && course.about_instructor.html_content && (
              <li dangerouslySetInnerHTML={{ __html: course.about_instructor.html_content }} />
            )}
          </ul>

          <h1>Instructor's Social Media</h1>
          <ul className={styles.socialMediaList}>
            {Array.isArray(instructor.social_media) &&
              instructor.social_media.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.platform}
                  </a>
                </li>
              ))}
          </ul>
        </div>

      </div>

      {/* Right section Instructor Card */}
      <div className={styles.right}>
        {/* Instructor name */}
        <div className={styles.instructorName}>{name}</div>
        <div className={styles.courseInfo}>
          <div className={styles.coursefee}>
            <h4>Course fees</h4>
            <h1>{course.fee.currency} &nbsp; {course.fee.amount}</h1>
            <h2>what is included</h2>
            {course.inclusions && course.inclusions.html_content && (
              <li dangerouslySetInnerHTML={{ __html: course.inclusions.html_content }} />
            )}
            <button>Register Now</button>
          </div>
        </div>
      </div>

      <div className={styles.testimonial}>
        <h3 className={styles.testimonialtext}>"{testimonial.text}"</h3>
        {/* <img className = {styles.testimonialtextimg} alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuXc6YAXGocE70Hb6Vv7OuLGm0LU8QtE4xw&usqp=CAU"/> */}
        <div><h4 className={styles.testimonialreview}>{testimonial.reviewer_name}</h4></div>
        <div><h4 className={styles.testimonialreview}>{testimonial.reviewer_designation}</h4></div>
      </div>
    </div>
  );
}

export default Instructor;
