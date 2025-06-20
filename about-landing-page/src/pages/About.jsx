import React from 'react';
import Hero from '../components/Hero';
import imageOne from '../images/imageOne.webp';
import imageTwo from '../images/imageTwo.webp';
import './About.css';

const About = () => {
  return (
    <div>
      <Hero />
      <section className="about-story-section">
        <div className="about-story-text">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <div className="about-story-headings">
            <div className="about-story-stat">
              <h3>12+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="about-story-stat">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="about-story-stat">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>
        <img
          src={imageOne}
          alt="Our Story"
          className="about-story-image"
        />
      </section>
      <section className="about-mission-section">
        <img
          src={imageTwo}
          alt="Our Mission & Vision"
          className="about-mission-image"
        />
        <div className="about-mission-text">
          <h2>Our Mission & Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <button className="navbar-btn" style={{ marginTop: '1.5rem' }}>Learn More</button>
        </div>
      </section>
      <section className="core-values-section">
        <h2 className="core-values-title">Core Values</h2>
        <div className="core-values-grid">
          <div className="core-value-item">
            <span className="core-value-icon" role="img" aria-label="Integrity">🔒</span>
            <h3 className="core-value-name">Integrity</h3>
            <p className="core-value-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="core-value-item">
            <span className="core-value-icon" role="img" aria-label="Innovation">💡</span>
            <h3 className="core-value-name">Innovation</h3>
            <p className="core-value-desc">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="core-value-item">
            <span className="core-value-icon" role="img" aria-label="Teamwork">🤝</span>
            <h3 className="core-value-name">Teamwork</h3>
            <p className="core-value-desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="core-value-item">
            <span className="core-value-icon" role="img" aria-label="Passion">🔥</span>
            <h3 className="core-value-name">Passion</h3>
            <p className="core-value-desc">We are driven by passion in everything we do.</p>
          </div>
          <div className="core-value-item">
            <span className="core-value-icon" role="img" aria-label="Responsibility">🛡️</span>
            <h3 className="core-value-name">Responsibility</h3>
            <p className="core-value-desc">We take ownership and deliver on our commitments.</p>
          </div>
          <div className="core-value-item">
            <span className="core-value-icon" role="img" aria-label="Excellence">🏆</span>
            <h3 className="core-value-name">Excellence</h3>
            <p className="core-value-desc">We strive for excellence in every aspect of our work.</p>
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <p className="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas suscipit diam, sit amet faucibus nibh eleifend ullamcorper.</p>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" className="team-member-img" />
            <h3 className="team-member-name">John Doe</h3>
            <p className="team-member-role">CEO</p>
            <div className="team-member-socials">
              <a href="#" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" className="team-member-img" />
            <h3 className="team-member-name">Jane Smith</h3>
            <p className="team-member-role">CTO</p>
            <div className="team-member-socials">
              <a href="#" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Mike Lee" className="team-member-img" />
            <h3 className="team-member-name">Mike Lee</h3>
            <p className="team-member-role">Lead Designer</p>
            <div className="team-member-socials">
              <a href="#" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sara Kim" className="team-member-img" />
            <h3 className="team-member-name">Sara Kim</h3>
            <p className="team-member-role">Marketing Head</p>
            <div className="team-member-socials">
              <a href="https://www.facebook.com" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Alex Brown" className="team-member-img" />
            <h3 className="team-member-name">Alex Brown</h3>
            <p className="team-member-role">Project Manager</p>
            <div className="team-member-socials">
              <a href="#" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Emily Clark" className="team-member-img" />
            <h3 className="team-member-name">Emily Clark</h3>
            <p className="team-member-role">Business Analyst</p>
            <div className="team-member-socials">
              <a href="#" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Chris Evans" className="team-member-img" />
            <h3 className="team-member-name">Chris Evans</h3>
            <p className="team-member-role">Software Engineer</p>
            <div className="team-member-socials">
              <a href="#" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Linda Green" className="team-member-img" />
            <h3 className="team-member-name">Linda Green</h3>
            <p className="team-member-role">UI/UX Designer</p>
            <div className="team-member-socials">
              <a href="#" aria-label="Facebook" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.729.485-.899.825-.899h2.145V4.101L14.6 4.1c-3.036 0-3.725 2.277-3.725 3.735v1.163H8.1v2.998h2.775V20h3.63v-8.004h2.445l.375-2.998z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="team-social-icon">
                <svg width="15px" height="15px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <h2 className="footer-title">Stay Connected with us</h2>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook" className="footer-social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#1877F3" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.995 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.926-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.068 24 18.092 24 12.073z"/><path fill="#FFF" d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.948.462-1.874 1.953-1.874h1.513V4.979s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.059H7.078v3.47h3.047v8.385a12.07 12.07 0 0 0 1.875.144c.638 0 1.267-.05 1.875-.144v-8.385h2.796z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="footer-social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24"><radialGradient id="IGpaint0_radial" cx="1.464" cy="0.505" r="1.023" gradientTransform="matrix(16.97 0 0 16.97 2.052 2.003)" gradientUnits="userSpaceOnUse"><stop stop-color="#fdf497"/><stop offset="0.5" stop-color="#fdf497"/><stop offset="0.7" stop-color="#fd5949"/><stop offset="1" stop-color="#d6249f"/><stop offset="1" stop-color="#285AEB"/></radialGradient><path fill="url(#IGpaint0_radial)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191 0-5.502-.013-5.911-.072-7.191-.059-1.277-.353-2.45-1.32-3.417C19.398.425 18.225.131 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="footer-social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#0077B5" d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.555v-5.605c0-1.336-.025-3.058-1.865-3.058-1.867 0-2.153 1.459-2.153 2.968v5.695h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.267 2.37 4.267 5.455v6.284z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="footer-social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#1DA1F2" d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} COMAPNY. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About; 