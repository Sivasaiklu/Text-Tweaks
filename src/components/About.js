import React from 'react';

export default function About() {
  return (
    <div className="container"> 
      <div className="card bg-dark rounded text-info">
        <div className="card-body">
          <h5 className="card-title text-warning">About TextTweaks</h5>
          <p className="card-text">
            TextTweakss is a powerful online tool that provides a suite of utilities for 
            manipulating and analyzing text. 
            Our mission is to empower users with the tools they need to effectively 
            work with text, whether it's for personal, educational, or professional purposes.
          </p>
          <p className="card-text">
            With TextTweaks, you can easily:
            <ul>
              <li>Convert text to uppercase/lowercase</li>
              <li>Speech Ability</li>
              <li>Count words and characters</li>
              <li>Analyze text for readability</li>
            </ul>
          </p>
          <p className="card-text">
            We are constantly striving to improve our tools and add new features 
            based on user feedback. We believe that everyone should have access to 
            high-quality text tools, and we are committed to making TextTweaks 
            the best possible resource for all your text needs.
          </p>
        </div>
      </div>
    </div>
  );
}