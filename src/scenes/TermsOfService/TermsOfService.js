import React from 'react';
import { Link } from 'react-router-dom';
import { H2, H3, H4, P, Font } from 'components';
import { LegalDoc } from './styles';
import { withTheme } from 'styled-components';
import { Spacer } from 'xerum';

const TermsOfService = withTheme(props => {
  const { theme, selectedTheme } = props;
  const licensor = '[Company or App]';

  return (
    <LegalDoc theme={theme} selectedTheme={selectedTheme}>
      <Font weight='bold'>
        <P>ENGLISH</P>
      </Font>

      <div>
        <Font weight='bold'>Licensor</Font>:&nbsp;
        <Font weight='normal'>{licensor}</Font>
      </div>
      <Spacer size={2} />

      <H2>SOFTWARE LICENSE AGREEMENT</H2>
      <Spacer />

      <P>
        PLEASE READ THIS SOFTWARE LICENSE AGREEMENT (&quot;LICENSE&quot;)
        CAREFULLY BEFORE USING THE {licensor.toUpperCase()} SOFTWARE. &nbsp;BY USING THE {licensor.toUpperCase()}
        SOFTWARE, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE.
        &nbsp;IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT INSTALL
        AND/OR USE THE SOFTWARE.
      </P>
      <Spacer />

      <P>
        IMPORTANT NOTE: To the extent that this software may be used to
        reproduce materials, it is licensed to you only for reproduction of
        non-copyrighted materials, materials in which you own the copyright, or
        materials you are authorized or legally permitted to reproduce. &nbsp;If
        you are uncertain about your right to copy any material, you should
        contact your legal advisor.
      </P>
      <Spacer size={2} />

      <H3 id='section1'>1. General. </H3>
      <Spacer />

      <P>
        (a) The {licensor} software, content, documentation and any fonts included in
        the software (collectively the &quot;{licensor} Software&quot;) are licensed,
        not sold, to you by {licensor} (&quot;{licensor}&quot;) for use only under
        the terms of this License. &nbsp;{licensor} and/or {licensor}&#39;s licensors
        retain ownership of the {licensor} Software itself and reserve all rights not
        expressly granted to you.
      </P>
      <Spacer />

      <P>
        (b) {licensor}, at its discretion, may make available future updates to the
        {licensor} Software. &nbsp;The terms of this License will govern any software
        updates provided by {licensor} that replace and/or supplement the original
        {licensor} Software product, unless such upgrade is accompanied by a separate
        license in which case the terms of that license will govern.
      </P>
      <Spacer />

      <P>
        (c) Title and intellectual property rights in and to any content
        displayed by or accessed through the {licensor} Software belongs to the
        respective content owner. &nbsp;Such content may be protected by
        copyright or other intellectual property laws and treaties, and may be
        subject to terms of use of the third party providing such content.
        &nbsp;Except as otherwise provided in this License, this License does
        not grant you any rights to use such content.
      </P>
      <Spacer size={2} />

      <H3 id='section2'>2. Permitted License Uses and Restrictions. </H3>
      <Spacer />

      <P>
        (a) Subject to the terms and conditions of this License you are granted
        a limited non-transferable license to install and use the {licensor} Software
        on the designated platform that you own or control. &nbsp;The {licensor}
        Software license is only for your specific individual account. &nbsp;You
        agree that additional user or organization licenses must be purchased
        separately. &nbsp;You may not distribute or make the {licensor} Software
        available over a network where it could be used by multiple accounts at
        the same time without the aforementioned licenses per account. &nbsp;You
        may not rent, lease, lend, sell, redistribute or sublicense the {licensor}
        Software.
      </P>
      <Spacer />

      <P>
        (b) You may not and you agree not to, or to enable others to, copy
        (except as expressly permitted by this License and the &quot;Usage
        Rules&quot;), decompile, reverse engineer, disassemble, attempt to
        derive the source code of, decrypt, modify, or create derivative works
        of the {licensor} Software or any services provided by the {licensor} Software, or
        any part thereof (except as and only to the extent any foregoing
        restriction is prohibited by applicable law or to the extent as may be
        permitted by the licensing terms governing use of any open sourced
        components included with the {licensor} Software). &nbsp;Any attempt to do so
        is a violation of the rights of {licensor} and its licensors of the {licensor}
        Software.
      </P>
      <Spacer />

      <P>
        (c) Except as may be provided herein, you may not use, extract or
        distribute, commercially or otherwise, on a standalone basis, any
        photographs, images, graphics, artwork, audio, video or similar assets
        (&ldquo;Digital Materials&rdquo;) contained within, or provided as a
        part of, the {licensor} Software, or otherwise use the Digital Materials
        outside the context of its intended use as part of the {licensor} Software.
      </P>
      <Spacer />

      <P>
        (d) You agree to use the {licensor} Software and the Services (as defined in&nbsp;
        <a href='#section5'>Section 5</a>&nbsp; below) in compliance with
        all applicable laws, including local laws of the country or region in
        which you reside or in which you download or use the {licensor} Software and
        Services.
      </P>
      <Spacer size={2} />

      <H3 id='section3'>3. &nbsp;Consent to Use of Data. </H3>
      <Spacer />

      <P>
        (a) Anonymous Diagnostic and Usage Data. &nbsp;You agree that {licensor} and
        its subsidiaries and agents may collect, maintain, process and use
        diagnostic, technical, usage and related information, including but not
        limited to information about your platform; computer, system and
        application software, and peripherals, that is gathered periodically to
        facilitate the provision of software updates, product support and other
        services to you (if any) related to the {licensor} Software, and to verify
        compliance with the terms of this License. &nbsp;{licensor} may use this
        information, as long as it is in a form that does not personally
        identify you, to improve our products or to provide services or
        technologies to you. &nbsp;To enable {licensor}&rsquo;s partners and third
        party developers to improve their software, hardware and services
        designed for use with {licensor} products, {licensor} may also provide any such
        partner and third party developer with a subset of diagnostic
        information that is relevant to that partner&rsquo;s or
        developer&rsquo;s software, hardware and/or services, as long as the
        diagnostic information is in a form that does not personally identify
        you.
      </P>
      <Spacer />

      <P>
        (b) Location Data. &nbsp;{licensor} and its partners and licensees may provide
        certain features or services through the {licensor} Software that use and/or
        rely upon location information. &nbsp;To provide such features and
        services, where available, {licensor} and its partners and licensees may
        transmit, collect, maintain, process and use your location data.
        &nbsp;The location data collected by {licensor} is collected in a form that
        does not personally identify you and may be used by {licensor} and its
        partners and licensees to provide and improve location-based products
        and services. By using any location-based features or services provided
        by or through the {licensor} Software, you agree and consent to {licensor}&#39;s
        and its partners&#39; and licensees&rsquo; transmission, collection,
        maintenance, processing and use of your location data to provide and
        improve such products and services. &nbsp;You may withdraw this consent
        at any time by going to the settings on your platform and turning off
        any online or networking features for the {licensor} Software. &nbsp;You are
        aware that by doing so, you will not be able to access, use or maintain
        any online services found within the {licensor} Software.
      </P>
      <Spacer />

      <P>
        (c) At all times your information will be treated in accordance with
        {licensor}&rsquo;s <Link to='/privacy-policy'>Privacy policy</Link>.
      </P>
      <Spacer size={2} />

      <H3 id='section4'>4. &nbsp;Termination.</H3>
      <Spacer />
      <P>
        This License is effective until terminated. &nbsp;Your rights under this
        License will terminate automatically or otherwise cease to be effective
        without notice from {licensor} if you fail to comply with any term(s) of this
        License. &nbsp;Upon the termination of this License, you shall cease all
        use of the {licensor} Software and destroy all copies, full or partial, of
        the {licensor} Software. &nbsp;Sections <a href='#section3'>3</a>,&nbsp;
        <a href='#section4'>4</a>, <a href='#section5'>5</a>,&nbsp;
        <a href='#section6'>6</a>, <a href='#section7'>7</a>,&nbsp;
        <a href='#section9'>9</a> and <a href='#section10'>10</a> of
        this License shall survive any such termination. &nbsp;
      </P>
      <Spacer />

      <H3 id='section5'>5. &nbsp;Services and Third Party Materials.</H3>
      <Spacer />

      <P>
        (a) The {licensor} Software may enable access to {licensor}&rsquo;s Store and
        other {licensor} and third party services and websites (collectively and
        individually, &quot;Services&quot;). &nbsp;Use of these Services
        requires Internet access, and use of certain Services may require a
        {licensor} Store account, which may require you to accept additional terms
        and may be subject to additional fees. &nbsp;By using the {licensor} Software
        in connection with a {licensor} Store account, or other {licensor} account, you
        agree to the applicable terms of service for that account.
      </P>
      <Spacer />

      <P>
        (b) You understand that by using any of the Services, you may encounter
        content that may be deemed offensive, indecent, or objectionable, which
        content may or may not be identified as having explicit language.
        &nbsp;Nevertheless, you agree to use the Services at your sole risk and
        that {licensor} shall have no liability to you for content that may be found
        to be offensive, indecent, or objectionable.
      </P>
      <Spacer />

      <P>
        (c) Certain Services may display, include or make available content,
        data, information, applications or materials from third parties
        (&ldquo;Third Party Materials&rdquo;) or provide links to certain third
        party websites. &nbsp;By using the Services, you acknowledge and agree
        that {licensor} is not responsible for examining or evaluating the content,
        accuracy, completeness, timeliness, validity, copyright compliance,
        legality, decency, quality or any other aspect of such Third Party
        Materials or websites. &nbsp;{licensor}, its officers, affiliates and
        subsidiaries do not warrant or endorse and do not assume and will not
        have any liability or responsibility to you or any other person for any
        third-party Services, Third Party Materials or websites, or for any
        other materials, products, or services of third parties. &nbsp;Third
        Party Materials and links to other websites are provided solely as a
        convenience to you.
      </P>
      <Spacer />

      <P>
        (d) You agree that the Services contain proprietary content, information
        and material that is owned by {licensor} and/or its licensors, and is
        protected by applicable intellectual property and other laws, including
        but not limited to copyright, and that you will not use such proprietary
        content, information or materials in any way whatsoever except for
        permitted use of the Services or in any manner that is inconsistent with
        the terms of this License or that infringes any intellectual property
        rights of a third party or {licensor}. &nbsp;No portion of the Services may
        be reproduced in any form or by any means. &nbsp;You agree not to
        modify, rent, lease, loan, sell, distribute, or create derivative works
        based on the Services, in any manner, and you shall not exploit the
        Services in any unauthorized way whatsoever, including but not limited
        to, using the Services to transmit any computer viruses, worms, trojan
        horses or other malware, or by trespass or burdening network capacity.
        &nbsp;You further agree not to use the Services in any manner to harass,
        abuse, stalk, threaten, defame or otherwise infringe or violate the
        rights of any other party, and that {licensor} is not in any way responsible
        for any such use by you, nor for any harassing, threatening, defamatory,
        offensive, infringing or illegal messages or transmissions that you may
        receive as a result of using any of the Services.
      </P>
      <Spacer />

      <P>
        (e) In addition, Services and Third Party Materials that may be used by,
        accessed from, displayed on or linked to from the {licensor} Software are not
        available in all languages or in all countries. &nbsp;{licensor} makes no
        representation that such Services and Materials are appropriate or
        available for use in any particular location. &nbsp;To the extent you
        choose to use or access such Services or Materials, you do so at your
        own initiative and are responsible for compliance with any applicable
        laws, including but not limited to applicable local laws.
      </P>
      <Spacer />

      <P>
        (f) {licensor} and its licensors reserve the right to change, suspend,
        remove, or disable access to any Services at any time without notice.
        &nbsp;In no event will {licensor} be liable for the removal of or disabling
        of access to any such Services. &nbsp;{licensor} may also impose limits on
        the use of or access to certain Services, in any case and without notice
        or liability.
      </P>
      <Spacer size={2} />

      <H3 id='section6'>6. &nbsp;Disclaimer of Warranties. </H3>
      <Spacer />

      <P>
        6.1 If you are a customer who is a consumer (someone who uses the {licensor}
        Software outside of your trade, business or profession), you may have
        legal rights in your country of residence which would prohibit the
        following limitations from applying to you, and where prohibited they
        will not apply to you. &nbsp;To find out more about rights, you should
        contact a local consumer advice organization.
      </P>
      <Spacer />

      <P>
        6.2 YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT TO THE EXTENT PERMITTED BY
        APPLICABLE LAW, USE OF THE {licensor.toUpperCase()} SOFTWARE AND SERVICES IS AT YOUR SOLE
        RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE,
        ACCURACY AND EFFORT IS WITH YOU.
      </P>
      <Spacer />

      <P>
        6.3 TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE {licensor.toUpperCase()}
        SOFTWARE AND SERVICES ARE PROVIDED &quot;AS IS&quot;, WITH ALL FAULTS
        AND WITHOUT WARRANTY OF ANY KIND, AND {licensor.toUpperCase()} AND {licensor.toUpperCase()}&#39;S LICENSORS
        (COLLECTIVELY REFERRED TO AS &quot;{licensor.toUpperCase()}&quot; FOR THE PURPOSES OF
        SECTIONS <a href='#section6'>6</a> AND <a href='#section7'>7</a>
        ) HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE
        {licensor.toUpperCase()} SOFTWARE AND SERVICES , EITHER EXPRESS, IMPLIED OR STATUTORY,
        INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS
        OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A PARTICULAR
        PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT, AND NON-INFRINGEMENT OF THIRD
        PARTY RIGHTS.
      </P>
      <Spacer />

      <P>
        6.4 {licensor.toUpperCase()} DOES NOT WARRANT AGAINST INTERFERENCE WITH YOUR ENJOYMENT OF
        THE {licensor.toUpperCase()} SOFTWARE OR SERVICES, THAT THE FUNCTIONS CONTAINED IN THE
        {licensor.toUpperCase()} SOFTWARE OR SERVICES WILL MEET YOUR REQUIREMENTS, THAT THE
        OPERATION OF THE {licensor.toUpperCase()} SOFTWARE OR SERVICES WILL BE UNINTERRUPTED OR
        ERROR-FREE, THAT THE {licensor.toUpperCase()} SOFTWARE OR SERVICES WILL BE COMPATIBLE WITH
        THIRD PARTY SOFTWARE, OR THAT DEFECTS IN THE {licensor.toUpperCase()} SOFTWARE OR SERVICES
        WILL BE CORRECTED.
      </P>
      <Spacer />

      <P>
        6.5 YOU FURTHER ACKNOWLEDGE THAT THE {licensor.toUpperCase()} SOFTWARE AND SERVICES ARE NOT
        INTENDED OR SUITABLE FOR USE IN SITUATIONS OR ENVIRONMENTS WHERE THE
        FAILURE OF, OR ERRORS OR INACCURACIES IN THE CONTENT, DATA OR
        INFORMATION PROVIDED BY, THE {licensor.toUpperCase()} SOFTWARE OR SERVICES COULD LEAD TO
        DEATH, PERSONAL INJURY, OR SEVERE PHYSICAL, PSYCHOLOGICAL OR
        ENVIRONMENTAL DAMAGE, INCLUDING WITHOUT LIMITATION THE OPERATION OF
        NUCLEAR FACILITIES, AIRCRAFT NAVIGATION OR COMMUNICATION SYSTEMS, AIR
        TRAFFIC CONTROL, LIFE SUPPORT OR WEAPONS SYSTEMS. &nbsp;
      </P>
      <Spacer />

      <P>
        6.6 NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY {licensor.toUpperCase()} OR A {licensor.toUpperCase()}
        AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. &nbsp;SOME
        JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR
        LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO THE ABOVE
        EXCLUSION AND LIMITATIONS MAY NOT APPLY TO YOU.
      </P>
      <Spacer size={2} />

      <H3 id='section7'>7. &nbsp;Limitation of Liability.</H3>
      <Spacer />

      <P>
        TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL {licensor.toUpperCase()}
        BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR
        CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES
        FOR LOSS OF PROFITS, CORRUPTION OR LOSS OF DATA, BUSINESS INTERRUPTION
        OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO
        YOUR USE OR INABILITY TO USE THE {licensor.toUpperCase()} SOFTWARE OR SERVICES, HOWEVER
        CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR
        OTHERWISE) AND EVEN IF {licensor.toUpperCase()} HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
        DAMAGES. &nbsp;SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF
        LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL
        DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. &nbsp;In no event
        shall {licensor}&#39;s total liability to you for all damages (other than as
        may be required by applicable law in cases involving personal injury)
        exceed the amount of fifty dollars ($50.00). &nbsp;The foregoing
        limitations will apply even if the above stated remedy fails of its
        essential purpose.
      </P>
      <Spacer size={2} />

      <H3 id='section8'>8. &nbsp;Government End Users.</H3>
      <Spacer />

      <P>
        The {licensor} Software and related documentation are &quot;Commercial
        Items&quot;, as that term is defined at 48 C.F.R. &nbsp;&sect;2.101,
        consisting of &quot;Commercial Computer Software&quot; and
        &quot;Commercial Computer Software Documentation&quot;, as such terms
        are used in 48 C.F.R. &nbsp;&sect;12.212 or 48 C.F.R.
        &nbsp;&sect;227.7202, as applicable. &nbsp;Consistent with 48 C.F.R.
        &nbsp;&sect;12.212 or 48 C.F.R. &nbsp;&sect;227.7202-1 through
        227.7202-4, as applicable, the Commercial Computer Software and
        Commercial Computer Software Documentation are being licensed to U.S.
        &nbsp;Government end users (a) only as Commercial Items and (b) with
        only those rights as are granted to all other end users pursuant to the
        terms and conditions herein. &nbsp;Unpublished-rights reserved under the
        copyright laws of the United States.
      </P>
      <Spacer size={2} />

      <H3 id='section9'>9. &nbsp;Controlling Law and Severability.</H3>
      <Spacer />

      <P>
        This License will be governed by and construed in accordance with the
        laws of the State of Maryland, excluding its conflict of law principles.
        &nbsp;This License shall not be governed by the United Nations
        Convention on Contracts for the International Sale of Goods, the
        application of which is expressly excluded. &nbsp;If you are a consumer
        based in the United Kingdom, this License will be governed by the laws
        of the jurisdiction of your residence. &nbsp;If for any reason a court
        of competent jurisdiction finds any provision, or portion thereof, to be
        unenforceable, the remainder of this License shall continue in full
        force and effect.
      </P>
      <Spacer size={2} />

      <H3 id='section10'>10. &nbsp;Complete Agreement; Governing Language.</H3>
      <Spacer />

      <P>
        This License constitutes the entire agreement between you and {licensor}
        relating to the {licensor} Software, and supersedes all prior or
        contemporaneous understandings regarding such subject matter. &nbsp;No
        amendment to or modification of this License will be binding unless in
        writing and signed by {licensor}. &nbsp;Any translation of this License is
        done for local requirements and in the event of a dispute between the
        English and any non-English versions, the English version of this
        License shall govern, to the extent not prohibited by local law in your
        jurisdiction.
      </P>
      <Spacer />

      <P>
        -----------------------------------------------------
      </P>
      <H4>NOTICES FROM {licensor.toUpperCase()}</H4>
      <P>
        If {licensor} needs to contact you about your product or account, you consent
        to receive the notices by email. &nbsp;You agree that any such notices
        that we send you electronically will satisfy any legal communication
        requirements.
      </P>
    </LegalDoc>
  );
});

export { TermsOfService };