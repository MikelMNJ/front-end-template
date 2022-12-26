import React from 'react';
import { Link } from 'react-router-dom';
import { H2, H3, P, Font, UL } from 'components';
import { LegalDoc } from './styles';
import { withTheme } from 'styled-components';
import { Spacer } from 'xerum';

const PrivacyPolicy = withTheme(props => {
  const { theme, selectedTheme } = props;
  const company = '[Company or app]';
  const extension = 'com';

  return (
    <LegalDoc theme={theme} selectedTheme={selectedTheme}>
      <H2>PRIVACY POLICY</H2>
      <Spacer />

      <P>
        At {company}, we collect and manage user data according to the following
        Privacy Policy:
      </P>
      <Spacer size={2} />

      <H3 id='dataCollectionSection'>Data Collected</H3>
      <Spacer />

      <P>
        We collect information you provide directly to us. For example, we
        collect information when you; create an account, subscribe, participate
        in any interactive features of our services, fill out a form, request
        customer support or otherwise communicate with us. The types of
        information we may collect include your name, email address, postal
        address, credit card information and other contact or identifying
        information you choose to provide.
      </P>
      <Spacer />

      <P>
        Please note that although we do not collect any &quot;Know Your Customer&quot;
        information at this time, we <em>may</em> require it in the future as more robust features
        are built into the {company} Software.  This information may include, but is not limited to:
        your social security number or government issued ID and may be collected, as needed,
        for compliance with US Law and regulation. This information will only be requested
        via secure channels within your account&apos;s interface and never by other means &mdash; such
        as email, forums or chat services (third-party or otherwise).  We will amend this policy
        and update your account interface if such data collection begins.  Please reference the&nbsp;
        <Link to='#securitySection'>security section</Link> below.
      </P>
      <Spacer />

      <P>
        We collect anonymous data from every visitor of the {company} Software to monitor
        traffic and fix bugs. For example, we collect information like web
        requests, the data sent in response to such requests, the Internet
        Protocol address, the browser type, the browser language, and a
        timestamp for the request.
      </P>
      <Spacer />

      <P>
        We also use various technologies to collect information, and this may
        include sending cookies to your computer. Cookies are small data files
        stored on your hard drive or in your device memory that helps us to
        improve our services and your experience, see which areas and features
        of our services are popular and count visits. We may also collect
        information using web beacons (also known as &lsquo;tracking pixels&rsquo;). Web
        beacons are electronic images that may be used in our services or emails
        and to track count visits or understand usage and campaign
        effectiveness.
      </P>
      <Spacer size={2} />

      <H3 id='dataUseSection'>Use of the Data</H3>
      <Spacer />

      <P>
        We only use your personal information to provide you the
        {company} services or to communicate with you about the {company} Software or our services.
      </P>
      <Spacer />

      <P>
        We employ industry standard techniques to protect against unauthorized
        access of data about you that we store, including personal information.
      </P>
      <Spacer />

      <P>
        We do not share personal information you have provided to us without
        your consent, unless:
      </P>
      <Spacer />

      <UL>
        <li>Doing so is appropriate to carry out your own request.</li>
        <li>
          We believe it is needed to enforce our <Link to='/terms-of-service'>terms of service</Link> or
          other terms, or that is legally required.
        </li>
        <li>
          We believe it is needed to detect, prevent or address fraud, security
          or technical issues.
        </li>
      </UL>
      <Spacer size={2} />

      <H3 id='dataSharingSection'>Sharing of Data</H3>
      <Spacer />

      <P>
        We don&apos;t share your personal information with third parties. Aggregated,
        anonymized data is periodically transmitted to external services to help
        us improve the {company} Software and service.
      </P>
      <Spacer />

      <P>
        We may allow third parties to provide analytics services. These third
        parties may use cookies, web beacons and other technologies to collect
        information about your use of the services and other websites, including
        your IP address, web browser, pages viewed, time spent on pages, links
        clicked and conversion information.
      </P>
      <Spacer />

      <P>
        We may also use social buttons provided by services like Twitter,
        LinkedIn and Facebook. Your use of these third party services is
        entirely optional. We are not responsible for the privacy policies
        and/or practices of these third party services, and you are responsible
        for reading and understanding those third party services&apos; privacy
        policies.
      </P>
      <Spacer size={2} />

      <H3>Opt-Out, Communication Preferences</H3>
      <Spacer />

      <P>
        You may modify your communication preferences and/or opt-out from
        specific communications at any time. These options are provided for you
        as links within the communications themselves.
      </P>
      <Spacer size={2} />

      <H3 id='securitySection'>Security</H3>
      <Spacer />

      <P>
        We take reasonable steps to protect personally identifiable information
        from loss, misuse, and unauthorized access, disclosure, alteration, or
        destruction. But, you should keep in mind that no Internet transmission
        is ever completely secure or error-free.
      </P>
      <Spacer />

      <P>
        {company}, any of it&apos;s licensors or officers will never ask for your password!
        {company} will also never ask for funds &mdash; fiat or digital &mdash; to be
        sent to any specific individual&apos;s bank account or cryptographic wallet address.
        If payment is required for any of our services, it will always be handled securely
        via our third-party payment processor: Stripe.
      </P>
      <Spacer />

      <P>
        Please exercise caution and good practices to protect your information:
      </P>
      <Spacer />

      <UL>
        <li>
          Do not send any sensitive information on public devices or devices you do not
          trust, explicitly.
        </li>

        <li>
          Always check the receiving address of any communications for legitimacy.
          Communications from us will contain a&nbsp;
          &quot;[person or department]@{company.toLowerCase()}.{extension}&quot;&nbsp;
          format &mdash; specifically be cautious if the domain extension is not &quot;.{extension}&quot;&nbsp;
          or spelling errors are present to resemble our domain.
        </li>

        <li>
          Additionally, you should always check for spelling errors in the subject or body of any
          communications.
        </li>

        <li>
          Always copy links from emails and manually paste them into a trusted web-browser&apos;s URL
          field, <Font weight='bold'>for vetting first</Font>, <em>before</em> you hit enter.
        </li>

        <li>
          Always check any domains or sub-domains for a valid SSL encrypted certificate via
          &quot;https&quot;.
        </li>
      </UL>
      <Spacer />

      <P>
        If any of these best practices are not up to your standards, or do not seem legitimate in
        practice, immediately navigate away from, delete or close the; website, service, chat,
        communication etc.  The use of a VPN service is also recommended to ensure you always have
        a secure connection and privacy that helps protects your device and data.
      </P>
      <Spacer size={2} />

      <H3 id='minorsSection'>About Children</H3>
      <Spacer />

      <P>
        The {company} Software is not intended for children under the age of 13. We do not
        knowingly collect personally identifiable information via the {company} Software
        from visitors in this age group.
      </P>
      <Spacer size={2} />

      <H3>Changes to the Privacy Policy</H3>
      <Spacer />

      <P>
        We may amend this Privacy Policy from time to time. Use of information
        we collect now is subject to the Privacy Policy in effect at the time
        such information is used.
      </P>
      <Spacer />

      <P>
        If we make major changes in the way we collect or use information, we
        will notify you by posting an announcement on the {company} Software or sending you
        an email.
      </P>
      <Spacer />
    </LegalDoc>
  );
});

export { PrivacyPolicy };