const types = {
  SHOW: 'show',
  WORKSHOP: 'workshop',
  EVENT: 'event',
};

export default {
  'live': [
    {
      date: '9/12/2017',
      events: [
        {
          title: '#LookMommyIMadeItWithARKit',
          artist: 'Andy Pruett',
          type: types.SHOW,
          description: '',
          day: 'Tuesday',
          time: '9:00'
        },
        {
          title: 'Crafty AF',
          artist: 'Very Sandwich',
          type: types.SHOW,
          description: '',
          day: 'Tuesday',
          time: '10:30'
        },
        {
          title: 'The Infuencers Podcast',
          artist: 'Sean Fahie',
          type: types.SHOW,
          description: '',
          day: 'Tuesday',
          time: '13:30'
        },
        {
          title: 'Busy Boys',
          artist: 'SlimeNet',
          type: types.SHOW,
          description: '',
          day: 'Tuesday',
          time: '15:00'
        },
        {
          title: 'Exploring Wearable Fashion',
          artist: 'Maggie Kane',
          artistUrl: 'streetcat.media',
          type: types.WORKSHOP,
          description: '',
          day: 'Tuesday',
          time: '17:00'
        }
      ]
    },
    {
      date: '9/13/2017',
      events: [
        {
          title: 'Dr. Tony\'s Mean Meme Machine',
          artist: 'Tony Zaret',
          type: types.SHOW,
          description: '',
          day: 'Wednesday',
          time: '16:00'
        },
        {
          title: 'Women\'s Techmaker\'s Panel',
          artist: 'Maggie Kane',
          artistUrl: 'streetcat.media',
          type: types.SHOW,
          description: '',
          day: 'Wednesday',
          time: '17:00'
        }
      ]
    },
    {
      date: '9/14/2017',
      events: [
        {
          title: 'Bench Talk',
          artist: 'George Gomez and Gavin Bernard',
          type: types.SHOW,
          description: '',
          day: 'Thursday',
          time: '14:00'
        },
        {
          title: 'StrucciMovies Live',
          artist: 'Shannon Strucci',
          type: types.SHOW,
          description: '',
          day: 'Thursday',
          time: '16:00'
        },
        {
          title: 'AiTL',
          artist: 'Maggie Kane',
          artistUrl: 'streetcat.media',
          type: types.SHOW,
          description: 'Google AI Magenta Demo',
          day: 'Thursday',
          time: '17:00'
        },
      ]
    },
    {
      date: '9/15/2017',
      events: [
        {
          title: 'TGIF / IDGAF',
          artist: 'Travis Broyles',
          type: types.SHOW,
          description: '',
          time: '11:00'
        },
        {
          title: 'Points, Lines, Planes, and Blobs',
          artist: 'Bradley Bowers',
          type: types.WORKSHOP,
          description: '',
          time: '15:30'
        },
        {
          title: '10th Letter / Merriam-Webster / Josh Dean ',
          artist: '',
          type: types.SHOW,
          description: '',
          time: '19:00'
        },
        {
          title: 'Stupid Ideas Hackathon',
          artist: '',
          type: types.WORKSHOP,
          description: '',
          time: '19:00'
        }
      ]
    },
    {
      date: '9/18/2017',
      events: [
        {
          title: 'A\u2014B',
          artist: 'Harald Haraldsson',
          type: types.SHOW,
          description: '',
          time: '15:00'
        }
      ]
    }
  ],
  'gallery': [
    {
      title: 'Basix',
      artist: 'Kevin Siwoff',
      artistUrl: 'kevinsiwoff.com',
      description: 'the importance of ecommerce (Coming Sep. 18th)',
    },
    {
      title: 'Supercruft',
      artist: 'Andrew Venell',
      artistUrl: 'andrewvenell.com',
      description: 'abstract video mosh (Coming Sep 13th)',
    },
    {
      title: 'Streetcat.Media',
      artist: 'Maggie Kane',
      artistUrl: 'streetcat.media',
      description: 'unending new media knowhow',
    },
    {
      title: 'Holypager',
      artist: 'Brannon Dorsey ',
      artistUrl: 'brannondorsey.com',
      description: 'pagers printing pages (Coming Sep. 18th)',
    },
    {
      title: 'DRAWN',
      artist: 'SuperBright',
      artistUrl: 'superbright.me',
      description: 'head-to-head vr sketch',
    },
    {
      title: 'From Coast to Coast',
      artist: 'Tim Kim',
      projectUrl: 'http://gallery.9to5.tv/from-coast-to-coast',
      description: 'worldwide sunrise and set',
    },
    {
      title: 'Points-Lines-Planes-Blobs',
      artist: 'Bradley Bowers',
      artistUrl: 'bradleylbowers.com',
      description: '3d modeling workshops',
    },
    {
      title: 'WWWWWWWWWWWWW.XYZ',
      artist: 'Point in Passing',
      projectUrl: 'http://gallery.9to5.tv/wwwwwwwwwwwww-xyz',
      description: 'keyboard vj',
    },
    {
      title: 'EPRA',
      artist: 'Adam Shavin',
      projectUrl: 'http://gallery.9to5.tv/epra',
      description: 'files transformed into music & poetry',
    },
    {
      title: 'Sign and T-Rex in Red',
      artist: 'Damjanski',
      artistUrl: 'damjanski.com',
      description: 'live protest by you (Coming Sep. 29th)',
    },
    {
      title: 'Dream.Almost.Digital',
      artist: 'Johan Nordberg',
      projectUrl: 'http://gallery.9to5.tv/dream-canvas',
      description: 'deep dream live sketch',
    },
    {
      title: 'Us, Aggregated',
      artist: 'Mimi Onuha',
      artistUrl: 'mimionuoha.com',
      description: 'family photos with crowdsourced comparison',
    }
  ]
};