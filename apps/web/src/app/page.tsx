import { Card } from '@repo/ui/components/card';

import { useState, useEffect, useRef } from 'react';
import { ActionButton } from './[locale]/tracks/_components/enroll-button';
import { ViewMoreButton } from './[locale]/explore/_components/view-more-button';

export default function Component() {
  const [userFollowed, setUserFollowed] = useState(false);

  return (
    <Card className="flex h-auto w-80 flex-col items-center space-y-4 p-5">
      <img
        className="h-24 w-24 rounded-full object-cover"
        src="https://file.rendit.io/n/p.png"
        alt="user image"
      />
      <div className="text-center">
        <h2 className="text-lg font-semibold">User Name</h2>
        <p className="text-sm text-gray-500">User Position</p>
      </div>
      <ActionButton
        action={userFollowed ? unenrollUserFromTrack : enrollUserInTrack}
        text={userFollowed ? 'Unfollow' : 'Follow'}
        slug="user-slug-goes-here"
        trackId={1}
      />
      <ViewMoreButton tag="POPULAR" redirectRoute="/user-profile" />
    </Card>
  );
}
