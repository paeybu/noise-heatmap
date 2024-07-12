import { generateMoreComplaints } from '../util/helper';

export const complaints = [
  {
    name: 'บ้านชาวบ้าน',
    lat: 13.946091710860198,
    lon: 100.47398044499302,
  },
  {
    name: 'งานวัด',
    lat: 13.928524924704858,
    lon: 100.47990031383006,
  },
  {
    name: 'มัสยิด',
    lat: 13.927439646837259,
    lon: 100.43168985711051,
  },
];

export const mockComplaints = generateMoreComplaints(
  complaints,
  Math.ceil(200 / complaints.length),
  30,
);
