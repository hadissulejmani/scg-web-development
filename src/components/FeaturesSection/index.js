import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={"WHAT WE DO"}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Strategy",
              description:
                "With data capabilities of a media agency coupled with the cultural analysis of a creative-driven research firm, we bring companies closer to their customers.",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "Creative",
              description:
                "With so many writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
            },
            {
              title: "Product and Service Development",
              description:
                "With our diverse teams of professionals you'll see agile product development and business innovation for the now.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            },
            {
              title: "Business Design",
              description:
                "Enabling digital transformations we manage to drive growth and scale innovation.",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
