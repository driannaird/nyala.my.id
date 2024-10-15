"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { Icons } from "../fragments/icons";
import { Post } from "ln/types/post";
import {
  getValidationCount,
  isValidation,
  toggleValidation,
} from "ln/services/validation";
import { useSession } from "next-auth/react";
import { cn } from "ln/utils/cn";

interface ValidationProps {
  post: Post;
}

const Validation: FC<ValidationProps> = ({ post }) => {
  const { data: session } = useSession();

  const [validCount, setValidCount] = useState<number>(0);
  const [invalidCount, setInvalidCount] = useState<number>(0);
  const [hasValidated, setHasValidated] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchValidationCounts = async () => {
      try {
        const { validCount, invalidCount } = await getValidationCount(post.id);
        const validation = await isValidation(post.id);
        if (validation !== null) {
          setHasValidated(validation.validation);
        }

        setValidCount(validCount);
        setInvalidCount(invalidCount);
      } catch (error) {
        console.error("Failed to fetch validation counts:", error);
      }
    };

    fetchValidationCounts();
  }, [post.id]);

  const handleToggleValidation = useCallback(
    async (isValid: boolean) => {
      if (!session) {
        alert("Please log in to validate posts.");
        return;
      }

      const isCurrentlyValid = hasValidated === isValid;

      if (isCurrentlyValid) {
        if (isValid) {
          setValidCount((prev) => prev - 1);
        } else {
          setInvalidCount((prev) => prev - 1);
        }
        setHasValidated(null);
      } else {
        if (isValid) {
          setValidCount((prev) => prev + 1);
          if (hasValidated !== null) {
            setInvalidCount((prev) => prev - 1);
          }
        } else {
          setInvalidCount((prev) => prev + 1);
          if (hasValidated !== null) {
            setValidCount((prev) => prev - 1);
          }
        }
        setHasValidated(isValid);
      }

      try {
        await toggleValidation(post.id, isValid);
      } catch (error) {
        console.error("Failed to toggle validation:", error);
        if (isCurrentlyValid) {
          if (isValid) {
            setValidCount((prev) => prev + 1);
          } else {
            setInvalidCount((prev) => prev + 1);
          }
        } else {
          if (isValid) {
            setValidCount((prev) => prev - 1);
            if (hasValidated !== null) {
              setInvalidCount((prev) => prev + 1);
            }
          } else {
            setInvalidCount((prev) => prev - 1);
            if (hasValidated !== null) {
              setValidCount((prev) => prev + 1);
            }
          }
        }
      }
    },
    [session, hasValidated, post.id]
  );

  return (
    <div className="flex">
      <button
        onClick={() => handleToggleValidation(true)}
        className="flex items-center gap-1 border border-border px-3 py-[3px] rounded-l-full">
        {hasValidated === true ? (
          <Icons.up
            fill="#46b54d"
            strokeWidth={1.25}
            className="text-primary"
          />
        ) : (
          <Icons.up strokeWidth={1.25} className="text-icon" />
        )}
        <div className="flex items-center gap-1">
          <span
            className={cn(
              hasValidated === true ? "text-primary" : "text-neutral",
              "text-sm"
            )}>
            Valid
          </span>
          <span
            className={cn(
              hasValidated === true ? "text-primary" : "text-text-drop",
              "text-sm"
            )}>
            •
          </span>
          <span
            className={cn(
              hasValidated === true ? "text-primary" : "text-text-drop",
              "text-sm"
            )}>
            {validCount}
          </span>
        </div>
      </button>

      <button
        onClick={() => handleToggleValidation(false)}
        className="flex items-center gap-1 border border-border px-3 py-[3px] rounded-r-full">
        {hasValidated === false ? (
          <Icons.down
            fill="#b92b26"
            strokeWidth={1.25}
            className="text-danger"
          />
        ) : (
          <Icons.down strokeWidth={1.25} className="text-icon" />
        )}
        <div className="flex items-center gap-1">
          <span
            className={cn(
              hasValidated === false ? "text-danger" : "text-text-drop",
              "text-sm"
            )}>
            •
          </span>
          <span
            className={cn(
              hasValidated === false ? "text-danger" : "text-text-drop",
              "text-sm"
            )}>
            {invalidCount}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Validation;
