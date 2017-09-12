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
          artist: 'Streetcat (Maggie Kane)',
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
          artist: 'Streetcat (Maggie Kane)',
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
          artist: 'Streetcat (Maggie Kane)',
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
          title: 'TBA',
          artist: 'Harald Haraladsson',
          type: types.SHOW,
          description: '',
          time: '13:00'
        },
        {
          title: 'TBA',
          artist: 'Bradley Bowers',
          type: types.WORKSHOP,
          description: '',
          time: '15:00'
        },
        {
          title: 'Stupid Ideas Hackathon',
          artist: '',
          type: types.WORKSHOP,
          description: '',
          time: '19:00'
        }
      ]
    }
  ],
  'gallery': [
  ]
}