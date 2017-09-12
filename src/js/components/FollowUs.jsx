import React from 'react';

const FollowUs = () => (
  <div className='above-fold'>
    <div className='opencall__cta'>
      <div className='opencall__cta__row'>
        <span className='sm'>F</span>
        <span className='sm'>O</span>
        <span className='sm'>L</span>
        <span className='sm'>L</span>
        <span className='sm'>O</span>
        <span className='sm'>W</span>
        <span className='sm'>&nbsp;</span>
        <span className='sm'>U</span>
        <span className='sm'>S</span>
      </div>
      <a href='https://www.facebook.com/9to5tv' target='_blank' className='opencall__cta__row no-slash'>
        <span className='md'>/</span>
        <span className='md'>F</span>
        <span className='md'>A</span>
        <span className='md'>C</span>
        <span className='md'>E</span>
        <span className='md'>B</span>
        <span className='md'>O</span>
        <span className='md'>O</span>
        <span className='md'>K</span>
        <span className='md'>/</span>
      </a>
      <a href='https://www.instagram.com/9to5.tv/' target='_blank' className='opencall__cta__row no-slash'>
        <span className='md'>/</span>
        <span className='md'>I</span>
        <span className='md'>N</span>
        <span className='md'>S</span>
        <span className='md'>T</span>
        <span className='md'>A</span>
        <span className='md'>G</span>
        <span className='md'>R</span>
        <span className='md'>A</span>
        <span className='md'>M</span>
        <span className='md'>/</span>
      </a>
      <a href='https://twitter.com/9to5_tv' target='_blank' className='opencall__cta__row no-slash'>
        <span className='md'>/</span>
        <span className='md'>T</span>
        <span className='md'>W</span>
        <span className='md'>I</span>
        <span className='md'>T</span>
        <span className='md'>T</span>
        <span className='md'>E</span>
        <span className='md'>R</span>
        <span className='md'>/</span>
      </a>
      <a className='opencall__cta__row no-slash'><br /></a>
      <a href='mailto:info@9to5.tv' target='_blank' className='opencall__cta__row no-slash'>
        <span className='md'>/</span>
        <span className='md'>i</span>
        <span className='md'>n</span>
        <span className='md'>f</span>
        <span className='md'>o</span>
        <span className='md'>@</span>
        <span className='md'>9</span>
        <span className='md'>t</span>
        <span className='md'>o</span>
        <span className='md'>5</span>
        <span className='md'>.</span>
        <span className='md'>t</span>
        <span className='md'>v</span>
        <span className='md'>/</span>
      </a>
    </div>
    <div dangerouslySetInnerHTML={{ __html: mailchimpHtml }} />
  </div>
);

const mailchimpHtml = `
  <!-- Begin MailChimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
  <style type="text/css">
      #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
      /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup">
  <form action="//9to5.us16.list-manage.com/subscribe/post?u=2b84719ded272f32daf9047bc&amp;id=9c3764ff66" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
      <label for="mce-EMAIL">Subscribe to 9to5: Works in Progress</label>
      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2b84719ded272f32daf9047bc_9c3764ff66" tabindex="-1" value=""></div>
      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
  </form>
  </div>
  <!--End mc_embed_signup-->
`;

export default FollowUs;