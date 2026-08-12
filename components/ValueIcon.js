import {
  CommunityIcon,
  CelebrationIcon,
  CreativityIcon,
  CommunicationIcon,
} from "./icons";

const map = {
  community: CommunityIcon,
  celebration: CelebrationIcon,
  creativity: CreativityIcon,
  communication: CommunicationIcon,
};

export default function ValueIcon({ name, className = "icon" }) {
  const Icon = map[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
